import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';
import AlphaVantageHelper from '../../helpers/AlphaVantage';
import StocksChart from '../../component/StocksChart';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {SearchBar} from 'react-native-elements';
import {RawStockSearch} from '../../models/AlphaVantage';
import SearchList from '../../component/SearchList';

const HomeScreen = () => {
    const chartOptions = useSelector((state: RootState) => state.chartOptions);

    const [searchText, setSearchText] = useState<string>('');
    const [companies, setCompanies] = useState<RawStockSearch>();
    const [searchActive, setSearchActive] = useState(false);

    useEffect(() => {
        const runner = async () => {
            const result = await AlphaVantageHelper.searchCompanies(searchText);
            setCompanies(result);
        };
        searchText.length > 0 && runner();
    }, [searchText]);

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                lightTheme
                round
                showCancel
                placeholder="Search..."
                containerStyle={styles.searchbarContainer}
                onChangeText={setSearchText}
                value={searchText}
                onCancel={() => setSearchActive(false)}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
                showLoading={true}
            />
            {searchActive && companies && companies.bestMatches.length > 0 && (
                <SearchList {...{companies, setSearchActive}} />
            )}
            {!searchActive && chartOptions.chartData && (
                <StocksChart data={chartOptions.chartData} />
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;
