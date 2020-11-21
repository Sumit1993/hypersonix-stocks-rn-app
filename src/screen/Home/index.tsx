import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';
import AlphaVantageHelper from '../../helpers/AlphaVantage';
import StocksChart from '../../component/StocksChart/StocksChart';
import {Unwrap} from '../../models/Unwrap';

const {getStocksData} = AlphaVantageHelper;

const HomeScreen = () => {
    const [data, setData] = useState<Unwrap<typeof getStocksData>>();

    const bootstrap = async () => {
        const result = await AlphaVantageHelper.getStocksData(
            'IBM',
            'daily',
            true,
        );
        setData(result);
    };
    useEffect(() => {
        bootstrap();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {data && <StocksChart data={data} />}
        </SafeAreaView>
    );
};

export default HomeScreen;
