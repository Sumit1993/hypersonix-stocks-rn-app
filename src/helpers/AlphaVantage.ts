import {TimeSeriesTerm} from '../store/reducers/ChartOptions/types';
import AlphaVantageService from '../utils/AlphaVantage';

const {
    getDailyData,
    getDailyAdjustedData,
    getCompanyOverview,
    search,
} = AlphaVantageService;

const getStocksData = async (
    symbol: string,
    type: TimeSeriesTerm,
    isAdjusted: boolean,
) => {
    let fun;
    switch (type) {
        case TimeSeriesTerm.Daily:
            fun = isAdjusted ? getDailyAdjustedData : getDailyData;
            break;
        case TimeSeriesTerm.Monthly:
            fun = isAdjusted ? getDailyAdjustedData : getDailyData;
            break;
        case TimeSeriesTerm.Yearly:
            fun = isAdjusted ? getDailyAdjustedData : getDailyData;
            break;
    }
    const chartData = await fun(symbol);

    const companyOverview = await getCompanyOverview(symbol);

    return {chartData, companyOverview};
};

const searchCompanies = (keyword: string) => {
    return search(keyword);
};

export default {getStocksData, searchCompanies};
