import {createAction} from '@reduxjs/toolkit';
import {ChartView, TimeSeriesTerm} from './types';

const changeChartView = createAction<ChartView>(
    'CHART_OPTIONS/CHANGE_CHART_VIEW',
);

const changeTimeSeriesTerm = createAction<TimeSeriesTerm>(
    'CHART_OPTIONS/CHANGE_TIME_SERIES_TERM',
);

export default {
    changeChartView,
    changeTimeSeriesTerm,
};
