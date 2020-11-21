import {createAction} from '@reduxjs/toolkit';
import {Unwrap} from '../../../models/Unwrap';
import AlphaVantageHelper from '../../../helpers/AlphaVantage';
import {ChartView, TimeSeriesTerm} from './types';

const changeChartView = createAction<ChartView>(
    'CHART_OPTIONS/CHANGE_CHART_VIEW',
);

const changeTimeSeriesTerm = createAction<TimeSeriesTerm>(
    'CHART_OPTIONS/CHANGE_TIME_SERIES_TERM',
);

const setAdjusted = createAction<boolean>('CHART_OPTIONS/SET_ADJUSTED');

const setChartData = createAction<
    Unwrap<typeof AlphaVantageHelper.getStocksData>
>('CHART_OPTIONS/SET_CHART_DATA');

export default {
    changeChartView,
    changeTimeSeriesTerm,
    setAdjusted,
    setChartData,
};
