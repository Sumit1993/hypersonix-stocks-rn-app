import React from 'react';
import {Line, Rect} from 'react-native-svg';

import {scaleY, scaleBody} from './ChartHelpers';

const MARGIN = 2;

export interface ICandle {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

interface CandleProps {
    candle: ICandle;
    index: number;
    width: number;
    candels: ICandle[];
}

const Candle = ({candle, index, width, candels}: CandleProps) => {
    const {close, open, high, low} = candle;
    const fill = close > open ? '#4AFA9A' : '#E33F64';
    const x = index * width;
    const max = Math.max(open, close);
    const min = Math.min(open, close);
    return (
        <>
            <Line
                x1={x + width / 2}
                y1={scaleY(low, candels)}
                x2={x + width / 2}
                y2={scaleY(high, candels)}
                stroke={fill}
                strokeWidth={1}
            />
            <Rect
                x={x + MARGIN}
                y={scaleY(max, candels)}
                width={width - MARGIN * 2}
                height={scaleBody(max - min, candels)}
                {...{fill}}
            />
        </>
    );
};

export default Candle;
