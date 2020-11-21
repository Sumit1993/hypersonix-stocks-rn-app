import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
// @ts-ignore
import HighchartsReactNative from '@highcharts/highcharts-react-native';

import {getChartOptions} from '../../helpers/ChartHelpers';
import {
    RawStockDailyAdjustedMeta,
    RawStockDailyMeta,
} from '../../models/AlphaVantage';
import styles from './styles';

interface IProps {
    data: number[][];
    meta: RawStockDailyMeta | RawStockDailyAdjustedMeta;
}

const VolumeView: React.FC<IProps> = (props) => {
    const [chartOptions, setChartOptions] = useState<any>();

    useEffect(() => {
        setChartOptions(getChartOptions(props.data));
    }, []);

    return (
        <View style={styles.container}>
            {chartOptions && (
                <HighchartsReactNative
                    modules={[]}
                    styles={styles.content}
                    options={chartOptions}
                    data={'Data to be stored as global variable in Webview'}
                    onMessage={console.log}
                    loader={true}
                    useCDN={true}
                    useSSL={true}
                />
            )}
        </View>
    );
};

export default VolumeView;
