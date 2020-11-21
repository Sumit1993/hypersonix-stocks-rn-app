import {ALPHA_VANTAGE_API_KEY} from '@env';
import AlphaVantage from 'alphavantage';

import {
    CompanyOverview,
    RawStockDaily,
    RawStockDailyAdjusted,
} from '../models/AlphaVantage';

const alpha = AlphaVantage({key: "PBSET5FPPBVFTNUX"});

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

export default {getCompanyOverview, getDailyData, getDailyAdjustedData};
