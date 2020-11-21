import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';
import AlphaVantageHelper from '../../helpers/AlphaVantage';
import StocksChart from '../../component/StocksChart';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store';
import ChartOptionsActions from '../../store/reducers/ChartOptions/actions';

const HomeScreen = () => {
    const chartOptions = useSelector((state: RootState) => state.chartOptions);
    const dispatch = useAppDispatch();

    const bootstrap = async () => {
        const result = await AlphaVantageHelper.getStocksData(
            'IBM',
            'daily',
            chartOptions.isAdjusted,
        );
        dispatch(ChartOptionsActions.setChartData(result));
    };

    useEffect(() => {
        bootstrap();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {chartOptions.chartData && (
                <StocksChart data={chartOptions.chartData} />
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;
