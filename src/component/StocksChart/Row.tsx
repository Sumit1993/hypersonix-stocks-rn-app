import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'grey',
    },
});

interface RowProps {
    label: string;
    color: Animated.SharedValue<string>;
    value: Animated.SharedValue<string>;
}

const Row = ({label, value, color}: RowProps) => {
    const style = useAnimatedStyle(() => ({
        color: color.value,
        fontWeight: 'bold',
        fontSize: 20,
    }));
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <ReText text={value} style={style} />
        </View>
    );
};

export default Row;
