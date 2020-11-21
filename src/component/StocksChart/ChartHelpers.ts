import {Dimensions} from 'react-native';
import {interpolate, Extrapolate} from 'react-native-reanimated';
import {round} from 'react-native-redash';
import {RawStockDaily, RawStockDailyAdjusted} from '../../models/AlphaVantage';

import {ICandle} from './Candle';

export const {width: SIZE} = Dimensions.get('window');

export const formatUSD = (value: number) => {
    'worklet';
    return `$ ${round(value, 2).toLocaleString('en-US', {currency: 'USD'})}`;
};

export const formatDatetime = (value: string) => {
    'worklet';
    const d = new Date(value);
    return d.toLocaleTimeString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const getDomain = (rows: ICandle[]): [number, number] => {
    'worklet';
    // @ts-ignore
    const values = rows.map(({high, low}) => [high, low]).flat();
    return [Math.min(...values), Math.max(...values)];
};

export const DOMAIN = getDomain;

export const scaleY = (value: number, candels: ICandle[]) => {
    'worklet';
    return interpolate(value, DOMAIN(candels), [SIZE, 0], Extrapolate.CLAMP);
};

export const scaleBody = (value: number, candels: ICandle[]) => {
    'worklet';
    return interpolate(
        value,
        [0, Math.max(...DOMAIN(candels)) - Math.min(...DOMAIN(candels))],
        [0, SIZE],
        Extrapolate.CLAMP,
    );
};

export const scaleYInvert = (y: number, candels: ICandle[]) => {
    'worklet';
    return interpolate(
        y,
        [0, SIZE],
        DOMAIN(candels).reverse(),
        Extrapolate.CLAMP,
    );
};

export const dataConverter = (
    data: RawStockDaily | RawStockDailyAdjusted,
): ICandle[] => {
    'worklet';
    const a = Object.entries(data['Time Series (Daily)']).map(
        ([key, value]) => ({
            date: new Date(key).toISOString(),
            open: parseFloat(value['1. open']),
            high: parseFloat(value['2. high']),
            low: parseFloat(value['3. low']),
            close: parseFloat(value['4. close']),
        }),
    );
    return a;
};
