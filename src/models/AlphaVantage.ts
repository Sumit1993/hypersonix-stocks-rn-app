export interface CompanyOverview {
    Symbol: string;
    AssetType: string;
    Name: string;
    Description: string;
    Exchange: string;
    Currency: string;
    Country: string;
    Sector: string;
    Industry: string;
    Address: string;
    FullTimeEmployees: string;
    FiscalYearEnd: string;
    LatestQuarter: string;
    MarketCapitalization: string;
    EBITDA: string;
    PERatio: string;
    PEGRatio: string;
    BookValue: string;
    DividendPerShare: string;
    DividendYield: string;
    EPS: string;
    RevenuePerShareTTM: string;
    ProfitMargin: string;
    OperatingMarginTTM: string;
    ReturnOnAssetsTTM: string;
    ReturnOnEquityTTM: string;
    RevenueTTM: string;
    GrossProfitTTM: string;
    DilutedEPSTTM: string;
    QuarterlyEarningsGrowthYOY: string;
    QuarterlyRevenueGrowthYOY: string;
    AnalystTargetPrice: string;
    TrailingPE: string;
    ForwardPE: string;
    PriceToSalesRatioTTM: string;
    PriceToBookRatio: string;
    EVToRevenue: string;
    EVToEBITDA: string;
    Beta: string;
    '52WeekHigh': string;
    '52WeekLow': string;
    '50DayMovingAverage': string;
    '200DayMovingAverage': string;
    SharesOutstanding: string;
    SharesFloat: string;
    SharesShort: string;
    SharesShortPriorMonth: string;
    ShortRatio: string;
    ShortPercentOutstanding: string;
    ShortPercentFloat: string;
    PercentInsiders: string;
    PercentInstitutions: string;
    ForwardAnnualDividendRate: string;
    ForwardAnnualDividendYield: string;
    PayoutRatio: string;
    DividendDate: string;
    ExDividendDate: string;
    LastSplitFactor: string;
    LastSplitDate: string;
}
export interface RawStockDailyMeta {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
}

export interface RawStockDailyTimeSeries {
    [date: string]:
        | {
              '1. open': string;
              '2. high': string;
              '3. low': string;
              '4. close': string;
              '5. volume': string;
          }
        | undefined;
}
export interface RawStockDaily {
    'Meta Data': RawStockDailyMeta;
    'Time Series (Daily)': RawStockDailyTimeSeries;
}

export interface RawStockDailyAdjustedMeta {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
}

export interface RawStockDailyAdjustedTimeSeries {
    [date: string]:
        | {
              '1. open': string;
              '2. high': string;
              '3. low': string;
              '4. close': string;
              '5. adjusted close': string;
              '6. volume': string;
              '7. dividend amount': string;
              '8. split coefficient': string;
          }
        | undefined;
}
export interface RawStockDailyAdjusted {
    'Meta Data': RawStockDailyAdjustedMeta;
    'Time Series (Daily)': RawStockDailyAdjustedTimeSeries;
}

export interface RawStockMonthly {
    'Meta Data': RawStockMonthlyAdjustedMeta;
    'Monthly Time Series': RawStockMonthlyTimeSeries;
}

export interface RawStockMonthlyAdjustedMeta {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Time Zone': string;
}

export interface RawStockMonthlyTimeSeries {
    [date: string]:
        | {
              '1. open': string;
              '2. high': string;
              '3. low': string;
              '4. close': string;
              '5. volume': string;
          }
        | undefined;
}

export interface RawStockMonthlyAdjustedMeta {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
}

export interface RawStockMonthlyAdjustedTimeSeries {
    [date: string]:
        | {
              '1. open': string;
              '2. high': string;
              '3. low': string;
              '4. close': string;
              '5. adjusted close': string;
              '6. volume': string;
              '7. dividend amount': string;
          }
        | undefined;
}
export interface RawStockMonthlyAdjusted {
    'Meta Data': RawStockMonthlyAdjustedMeta;
    'Time Series (Daily)': RawStockMonthlyAdjustedTimeSeries;
}

export interface RawStockSearch {
    bestMatches: {
        '1. symbol': string;
        '2. name': string;
        '3. type': string;
        '4. region': string;
        '5. marketOpen': string;
        '6. marketClose': string;
        '7. timezone': string;
        '8. currency': string;
        '9. matchScore': string;
    }[];
}
