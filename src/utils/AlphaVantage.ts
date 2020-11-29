import {ALPHA_VANTAGE_API_KEY} from '@env';
import AlphaVantage from 'alphavantage';

import {
    CompanyOverview,
    RawStockDaily,
    RawStockDailyAdjusted,
    RawStockMonthly,
    RawStockMonthlyAdjusted,
    RawStockSearch,
} from '../models/AlphaVantage';

const alpha = AlphaVantage({key: ALPHA_VANTAGE_API_KEY});

const getCompanyOverview = (symbol: string) => {
    return alpha.fundamental.company_overview(symbol) as Promise<
        CompanyOverview
    >;
};

const getDailyData = (symbol: string) => {
    return alpha.data.daily<RawStockDaily>(symbol);
};

const getDailyAdjustedData = (symbol: string) => {
    return alpha.data.daily_adjusted(symbol) as Promise<RawStockDailyAdjusted>;
};

const getMonthlyData = (symbol: string) => {
    return alpha.data.monthly<RawStockMonthly>(symbol);
};

const getMonthlyAdjustedData = (symbol: string) => {
    return alpha.data.monthly_adjusted(symbol) as Promise<
        RawStockMonthlyAdjusted
    >;
};

const search = (keyword: string) => {
    // @ts-ignore
    return alpha.data.search(keyword) as Promise<RawStockSearch>;
};

export default {
    getCompanyOverview,
    getDailyData,
    getDailyAdjustedData,
    getMonthlyData,
    getMonthlyAdjustedData,
    search,
};
