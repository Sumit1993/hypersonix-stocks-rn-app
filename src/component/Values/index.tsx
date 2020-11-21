import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {useDerivedValue} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';

import Row from '../Row';
import {formatDatetime, formatUSD, SIZE} from '../../helpers/ChartHelpers';
import {ICandle} from '../Candle';

const styles = StyleSheet.create({
    container: {},
    table: {
        flexDirection: 'row',
        padding: 16,
    },
    date: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },
    column: {
        flex: 1,
    },
    separator: {
        width: 16,
    },
});

interface IProps {
    translateX: Animated.SharedValue<number>;
    data: ICandle[];
}

const Values: React.FC<IProps> = (props) => {
    const STEP = SIZE / props.data.length;
    const close = useDerivedValue(
        () =>
            `${formatUSD(
                props.data[Math.floor(props.translateX.value / STEP)].close,
            )}`,
    );
    const open = useDerivedValue(
        () =>
            `${formatUSD(
                props.data[Math.floor(props.translateX.value / STEP)].open,
            )}`,
    );
    const low = useDerivedValue(
        () =>
            `${formatUSD(
                props.data[Math.floor(props.translateX.value / STEP)].low,
            )}`,
    );
    const high = useDerivedValue(
        () =>
            `${formatUSD(
                props.data[Math.floor(props.translateX.value / STEP)].high,
            )}`,
    );
    const diff = useDerivedValue(
        () =>
            `${
                ((props.data[Math.floor(props.translateX.value / STEP)].close -
                    props.data[Math.floor(props.translateX.value / STEP)]
                        .open) *
                    100) /
                props.data[Math.floor(props.translateX.value / STEP)].open
            }`,
    );
    const change = useDerivedValue(
        () =>
            `${
                props.data[Math.floor(props.translateX.value / STEP)].close -
                    props.data[Math.floor(props.translateX.value / STEP)].open <
                0
                    ? diff.value.substring(0, 5)
                    : diff.value.substring(0, 4)
            }%`,
    );
    const white = useDerivedValue(() => '#000');
    const color = useDerivedValue(() =>
        props.data[Math.floor(props.translateX.value / STEP)].close -
            props.data[Math.floor(props.translateX.value / STEP)].open >
        0
            ? '#4AFA9A'
            : '#E33F64',
    );
    const date = useDerivedValue(() =>
        formatDatetime(
            props.data[Math.floor(props.translateX.value / STEP)].date,
        ),
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.table}>
                <View style={styles.column}>
                    <Row label="Open" value={open} color={white} />
                    <Row label="Close" value={close} color={white} />
                </View>
                <View style={styles.separator} />
                <View style={styles.column}>
                    <Row label="High" value={high} color={white} />
                    <Row label="Low" value={low} color={white} />
                    <Row label="Change" value={change} color={color} />
                </View>
            </View>
            <ReText style={styles.date} text={date} />
        </SafeAreaView>
    );
};

export default Values;
