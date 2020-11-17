import React, {forwardRef, ReactNode, useImperativeHandle} from 'react';
import {Animated, TextStyle} from 'react-native';

interface IProps {
    children: ReactNode;
    style: TextStyle;
}

const ShakingText = forwardRef<{shake: () => void}, IProps>((props, ref) => {
    const shakedValue = new Animated.Value(0);

    useImperativeHandle(ref, () => ({shake}), []);

    const animatedStyle = () => {
        return {
            transform: [
                {
                    translateY: shakedValue.interpolate({
                        inputRange: [
                            0,
                            0.1,
                            0.2,
                            0.3,
                            0.4,
                            0.5,
                            0.6,
                            0.7,
                            0.8,
                            0.9,
                            1,
                        ],
                        outputRange: [
                            0,
                            10,
                            -15,
                            12,
                            -9,
                            18,
                            -7,
                            10,
                            -11,
                            5,
                            0,
                        ],
                    }),
                },
                {
                    translateX: shakedValue.interpolate({
                        inputRange: [
                            0,
                            0.1,
                            0.2,
                            0.3,
                            0.4,
                            0.5,
                            0.6,
                            0.7,
                            0.8,
                            0.9,
                            1,
                        ],
                        outputRange: [0, 2, -3, 4, -4, 3, -3, 4, -5, 2, 0],
                    }),
                },
            ],
        };
    };

    const shake = () => {
        shakedValue.setValue(0);
        Animated.spring(shakedValue, {
            toValue: 1,
            friction: 3,
            tension: 10,
            useNativeDriver: true,
        }).start(() => shakedValue.setValue(0));
    };

    return <Animated.Text {...props} style={[animatedStyle(), props.style]} />;
});

export default ShakingText;
