import {createLogic} from 'redux-logic';

import {RootState} from '../..';
import {ILogicsDeps} from '../../../models/LogicsDeps';
import ChartOptionsActions from '../../reducers/ChartOptions/actions';
import AlphaVantageHelper from '../../../helpers/AlphaVantage';

const {setAdjusted} = ChartOptionsActions;

const adjustedChanges = createLogic<RootState, any, any, ILogicsDeps>({
    type: setAdjusted.type,
    async process({getState}, dispatch, done) {
        const chartOptions = getState().chartOptions;
        const result = await AlphaVantageHelper.getStocksData(
            'IBM',
            'daily',
            chartOptions.isAdjusted,
        );
        dispatch(ChartOptionsActions.setChartData(result));
        done();
    },
});

export default [adjustedChanges];
