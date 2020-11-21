import AlphaVantageService from '../utils/AlphaVantage';

const {
    getDailyData,
    getDailyAdjustedData,
    getCompanyOverview,
} = AlphaVantageService;

const getStocksData = async (
    symbol: string,
    type: 'daily' | 'monthly' | 'yearly',
    isAdjusted: boolean,
) => {
    let fun;
    switch (type) {
        case 'daily':
            fun = isAdjusted ? getDailyAdjustedData : getDailyData;
            break;
        case 'monthly':
            fun = isAdjusted ? getDailyAdjustedData : getDailyData;
            break;
        case 'yearly':
            fun = isAdjusted ? getDailyAdjustedData : getDailyData;
            break;
    }
    const chartData = await fun(symbol);

    const companyOverview = await getCompanyOverview(symbol);

    return {chartData, companyOverview};
};

export default {getStocksData};
