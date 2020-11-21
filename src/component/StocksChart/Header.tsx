import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CompanyOverview} from '../../models/AlphaVantage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 16,
    },
    rightColumn: {
        flex: 1,
    },
    leftColumn: {
        flex: 1,
        alignItems: 'flex-end',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
});

interface IProps {
    data: CompanyOverview;
}

const Header: React.FC<IProps> = (props) => {
    return (
        <View style={StyleSheet.absoluteFill}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.rightColumn}>
                            <Text style={styles.title} numberOfLines={2}>
                                {props.data.Name}
                            </Text>
                            <Text style={styles.subtitle}>
                                {props.data.Symbol}
                            </Text>
                        </View>
                        <View style={styles.leftColumn}>
                            <Text
                                style={
                                    styles.title
                                }>{`$ ${props.data.MarketCapitalization}`}</Text>
                            <Text
                                style={[
                                    styles.subtitle,
                                    {
                                        color:
                                            parseInt(
                                                props.data
                                                    .QuarterlyRevenueGrowthYOY,
                                                10,
                                            ) > 0
                                                ? '#4AFA9A'
                                                : '#E33F64',
                                    },
                                ]}>
                                {`${props.data.QuarterlyRevenueGrowthYOY}`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tabs}>
                        <ButtonGroup
                            onPress={console.log}
                            selectedIndex={1}
                            buttons={['OHLC', 'Volume']}
                            containerStyle={{flex: 0.6}}
                        />
                        <ButtonGroup
                            onPress={console.log}
                            selectedIndex={1}
                            buttons={['Daily', 'Monthly', 'Yearly']}
                            containerStyle={{flex: 1}}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Header;
