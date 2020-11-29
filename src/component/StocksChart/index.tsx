import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';

import OHLCView from '../OHLCView';
import Values from '../Values';
import Line from '../Line';
import Header from '../Header';
import {
    dataConverterOHLC,
    dataConverterVolume,
    SIZE,
} from '../../helpers/ChartHelpers';
import {Unwrap} from '../../models/Unwrap';
import AlphaVantageHelper from '../../helpers/AlphaVantage';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import VolumeView from '../VolumeView';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/AppNav';
// import Label from '../Label';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface IProps {
    data: Unwrap<typeof AlphaVantageHelper.getStocksData>;
    navigation: HomeScreenNavigationProp;
}

const StocksChart: React.FC<IProps> = (props) => {
    const {
        navigation,
        data: {chartData, companyOverview},
    } = props;
    const chartOptions = useSelector((state: RootState) => state.chartOptions);
    const STEP = SIZE / Object.keys(chartData['Time Series (Daily)']).length;
    Animated.addWhitelistedNativeProps({text: true});
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler({
        onActive: ({x, y}) => {
            opacity.value = 1;
            translateY.value = clamp(y, 0, SIZE);
            translateX.value = x - (x % STEP) + STEP / 2;
        },
        onEnd: () => {
            opacity.value = 0;
        },
    });
    const horizontal = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{translateY: translateY.value}],
    }));
    const vertical = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{translateX: translateX.value}],
    }));
    const showOhlc = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));
    const showHeader = useAnimatedStyle(() => ({
        opacity: 1 - opacity.value,
    }));

    return (
        <View style={styles.container}>
            {dataConverterOHLC(chartData).length > 0 && (
                <>
                    <View>
                        <TouchableWithoutFeedback
                            onPress={() =>
                                navigation.navigate('Overview', companyOverview)
                            }>
                            <Animated.View
                                style={[StyleSheet.absoluteFill, showHeader]}>
                                <Header data={companyOverview} />
                            </Animated.View>
                        </TouchableWithoutFeedback>
                        <Animated.View pointerEvents="none" style={[showOhlc]}>
                            <Values
                                translateX={translateX}
                                data={dataConverterOHLC(chartData)}
                            />
                        </Animated.View>
                    </View>
                    <View>
                        {chartOptions.chartView === 'OHLC' ? (
                            <OHLCView data={dataConverterOHLC(chartData)} />
                        ) : (
                            <VolumeView
                                data={dataConverterVolume(chartData)}
                                meta={chartData['Meta Data']}
                            />
                        )}
                        {chartOptions.chartView === 'OHLC' && (
                            <PanGestureHandler
                                minDist={0}
                                {...{onGestureEvent}}>
                                <Animated.View style={StyleSheet.absoluteFill}>
                                    <Animated.View
                                        style={[
                                            StyleSheet.absoluteFill,
                                            horizontal,
                                        ]}>
                                        <Line x={SIZE} y={0} />
                                    </Animated.View>
                                    <Animated.View
                                        style={[
                                            StyleSheet.absoluteFill,
                                            vertical,
                                        ]}>
                                        <Line x={0} y={SIZE} />
                                    </Animated.View>
                                    {/* <Label
                                    translateY={translateY}
                                    opacity={opacity}
                                    data={dataConverter(chartData)}
                                /> */}
                                </Animated.View>
                            </PanGestureHandler>
                        )}
                    </View>
                </>
            )}
        </View>
    );
};

export default StocksChart;
