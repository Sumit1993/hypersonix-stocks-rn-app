import {createReducer} from '@reduxjs/toolkit';
import {ChartView, IChartOptions, TimeSeriesTerm} from './types';
import ChartOptionsActions from './actions';

const {
    changeChartView,
    changeTimeSeriesTerm,
    setAdjusted,
    setChartData,
    setSymbol,
} = ChartOptionsActions;

const initialState: IChartOptions = {
    chartView: ChartView.OHLC,
    timeSeriesTerm: TimeSeriesTerm.Daily,
    isAdjusted: false,
    chartData: null,
    symbol: '',
};

const reducer = createReducer(initialState, (builder) =>
    builder
        .addCase(changeChartView, (state, action) => {
            state.chartView = action.payload;
        })
        .addCase(changeTimeSeriesTerm, (state, action) => {
            state.timeSeriesTerm = action.payload;
        })
        .addCase(setAdjusted, (state, action) => {
            state.isAdjusted = action.payload;
        })
        .addCase(setChartData, (state, action) => {
            state.chartData = action.payload;
        })
        .addCase(setSymbol, (state, action) => {
            state.symbol = action.payload;
        }),
);

export default reducer;
