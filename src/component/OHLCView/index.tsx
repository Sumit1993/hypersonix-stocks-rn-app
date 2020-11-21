import React from 'react';
import {Svg} from 'react-native-svg';

import Candle, {ICandle} from '../Candle';
import {SIZE} from '../../helpers/ChartHelpers';

interface IProps {
    data: ICandle[];
}

const OHLCView: React.FC<IProps> = (props) => {
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

export default OHLCView;
