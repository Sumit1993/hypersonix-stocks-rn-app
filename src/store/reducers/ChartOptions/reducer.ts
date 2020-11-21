import {createReducer} from '@reduxjs/toolkit';
import {ChartView, IChartOptions, TimeSeriesTerm} from './types';
import AuthActions from './actions';

const {changeChartView, changeTimeSeriesTerm} = AuthActions;

const initialState: IChartOptions = {
    chartView: ChartView.OHLC,
    timeSeriesTerm: TimeSeriesTerm.Daily,
};

const reducer = createReducer(initialState, (builder) =>
    builder
        .addCase(changeChartView, (state, action) => {
            state.chartView = action.payload;
        })
        .addCase(changeTimeSeriesTerm, (state, action) => {
            state.timeSeriesTerm = action.payload;
        }),
);

export default reducer;
