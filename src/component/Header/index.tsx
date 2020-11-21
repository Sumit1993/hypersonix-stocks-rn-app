import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {CompanyOverview} from '../../models/AlphaVantage';
import {RootState, useAppDispatch} from '../../store';
import {
    ChartViewOptions,
    TimeSeriesTermOptions,
} from '../../store/reducers/ChartOptions/types';
import ChartOptionsActions from '../../store/reducers/ChartOptions/actions';
import styles from './styles';

interface IProps {
    data: CompanyOverview;
}

const {changeChartView, changeTimeSeriesTerm} = ChartOptionsActions;

const Header: React.FC<IProps> = (props) => {
    const chartOptions = useSelector((state: RootState) => state.chartOptions);
    const dispatch = useAppDispatch();
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
                                    // eslint-disable-next-line react-native/no-inline-styles
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
                            onPress={(index) =>
                                dispatch(
                                    changeChartView(ChartViewOptions[index]),
                                )
                            }
                            selectedIndex={ChartViewOptions.indexOf(
                                chartOptions.chartView,
                            )}
                            buttons={ChartViewOptions}
                            containerStyle={styles.flex60}
                        />
                        <ButtonGroup
                            onPress={(index) =>
                                dispatch(
                                    changeTimeSeriesTerm(
                                        TimeSeriesTermOptions[index],
                                    ),
                                )
                            }
                            selectedIndex={TimeSeriesTermOptions.indexOf(
                                chartOptions.timeSeriesTerm,
                            )}
                            buttons={TimeSeriesTermOptions}
                            containerStyle={styles.flex100}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Header;
