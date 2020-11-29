import React, {createRef, useEffect, useState} from 'react';
import {
    Image,
    Keyboard,
    SafeAreaView,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchBar} from 'react-native-elements';
import {useSelector} from 'react-redux';

import styles from './styles';
import AlphaVantageHelper from '../../helpers/AlphaVantage';
import StocksChart from '../../component/StocksChart';
import {RootState} from '../../store';
import {RawStockSearch} from '../../models/AlphaVantage';
import SearchList from '../../component/SearchList';
import {RootStackParamList} from '../../navigation/AppNav';
import Images from '../../constants/images';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface IProps {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<IProps> = (props) => {
    const {navigation} = props;
    const chartOptions = useSelector((state: RootState) => state.chartOptions);
    const searchBarRef = createRef<SearchBar>();

    const [searchText, setSearchText] = useState<string>('');
    const [companies, setCompanies] = useState<RawStockSearch>({
        bestMatches: [],
    });
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
                ref={searchBarRef}
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
            {searchActive && companies.bestMatches.length > 0 && (
                <SearchList {...{companies, setSearchActive}} />
            )}
            {searchActive && companies.bestMatches.length === 0 && (
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                    style={styles.f1}>
                    <View style={styles.f1} />
                </TouchableWithoutFeedback>
            )}
            {!searchActive && chartOptions.chartData && (
                <StocksChart data={chartOptions.chartData} {...{navigation}} />
            )}
            {!searchActive && companies.bestMatches.length === 0 && (
                <View style={styles.imageContainer}>
                    <Image
                        source={Images.search}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;
