import React from 'react';
import {Svg} from 'react-native-svg';

import Candle, {ICandle} from './Candle';
import {SIZE} from './ChartHelpers';

interface IProps {
    data: ICandle[];
}

const Chart: React.FC<IProps> = (props) => {
    const STEP = SIZE / props.data.length;
    return (
        <Svg width={SIZE} height={SIZE}>
            {props.data.map((candle, index) => (
                <Candle
                    key={candle.date}
                    width={STEP}
                    {...{candle, index}}
                    candels={props.data}
                />
            ))}
        </Svg>
    );
};

export default Chart;
