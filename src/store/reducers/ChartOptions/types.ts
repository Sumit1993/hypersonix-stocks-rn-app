import {Unwrap} from '../../../models/Unwrap';
import AlphaVantageHelper from '../../../helpers/AlphaVantage';

export enum ChartView {
    OHLC = 'OHLC',
    Volume = 'Volume',
}

export const ChartViewOptions = [ChartView.OHLC, ChartView.Volume];

export enum TimeSeriesTerm {
    Daily = 'Daily',
    Monthly = 'Monthly',
    Yearly = 'Yearly',
}

export const TimeSeriesTermOptions = [
    TimeSeriesTerm.Daily,
    TimeSeriesTerm.Monthly,
    TimeSeriesTerm.Yearly,
];

export interface IChartOptions {
    chartView: ChartView;
    timeSeriesTerm: TimeSeriesTerm;
    isAdjusted: boolean;
    chartData: Unwrap<typeof AlphaVantageHelper.getStocksData> | null;
}
