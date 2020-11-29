import {createLogic} from 'redux-logic';

import {RootState} from '../..';
import {ILogicsDeps} from '../../../models/LogicsDeps';
import ChartOptionsActions from '../../reducers/ChartOptions/actions';
import AlphaVantageHelper from '../../../helpers/AlphaVantage';

const {setAdjusted, setSymbol, changeTimeSeriesTerm} = ChartOptionsActions;

const adjustedChanges = createLogic<RootState, any, any, ILogicsDeps>({
    type: setAdjusted.type,
    async process({getState}, dispatch, done) {
        const chartOptions = getState().chartOptions;
        const {symbol, timeSeriesTerm, isAdjusted} = chartOptions;
        const result = await AlphaVantageHelper.getStocksData(
            symbol,
            timeSeriesTerm,
            isAdjusted,
        );
        dispatch(ChartOptionsActions.setChartData(result));
        done();
    },
});

const symbolChanges = createLogic<RootState, any, any, ILogicsDeps>({
    type: setSymbol.type,
    async process({getState}, dispatch, done) {
        const chartOptions = getState().chartOptions;
        const {symbol, timeSeriesTerm, isAdjusted} = chartOptions;
        const result = await AlphaVantageHelper.getStocksData(
            symbol,
            timeSeriesTerm,
            isAdjusted,
        );
        dispatch(ChartOptionsActions.setChartData(result));
        done();
    },
});

const timeSeriesChanges = createLogic<RootState, any, any, ILogicsDeps>({
    type: changeTimeSeriesTerm.type,
    async process({getState}, dispatch, done) {
        const chartOptions = getState().chartOptions;
        const {symbol, timeSeriesTerm, isAdjusted} = chartOptions;
        const result = await AlphaVantageHelper.getStocksData(
            symbol,
            timeSeriesTerm,
            isAdjusted,
        );
        dispatch(ChartOptionsActions.setChartData(result));
        done();
    },
});

export default [adjustedChanges, symbolChanges, timeSeriesChanges];
