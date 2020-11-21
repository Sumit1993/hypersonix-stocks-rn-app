import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
    useDerivedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import {ICandle} from './Candle';

import {formatUSD, scaleYInvert} from './ChartHelpers';

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignSelf: 'flex-end',
        backgroundColor: '#FEFFFF',
        borderRadius: 4,
        padding: 4,
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

interface IProps {
    translateY: Animated.SharedValue<number>;
    opacity: Animated.SharedValue<number>;
    data: ICandle[];
}

const Label: React.FC<IProps> = (props) => {
    const text = useDerivedValue(() => {
        const price = scaleYInvert(props.translateY.value, props.data);
        return formatUSD(price);
    });

    const horizontal = useAnimatedStyle(() => ({
        opacity: props.opacity.value,
        transform: [{translateY: props.translateY.value}],
    }));
    return (
        <Animated.View style={[styles.container, horizontal]}>
            <ReText {...{text}} />
        </Animated.View>
    );
};

export default Label;
