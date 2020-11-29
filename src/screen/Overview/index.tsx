import React from 'react';
import {SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/AppNav';
import {RouteProp} from '@react-navigation/native';
import {Text} from 'react-native-elements';

type OverviewScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Overview'
>;
type OverviewScreenRouteProp = RouteProp<RootStackParamList, 'Overview'>;

interface IProps {
    navigation: OverviewScreenNavigationProp;
    route: OverviewScreenRouteProp;
}

const OverviewScreen: React.FC<IProps> = (props) => {
    const {
        route: {params},
    } = props;

    return (
        <SafeAreaView>
            <Text h3>{params.Name}</Text>
            <Text h4>{params.Symbol}</Text>
            <Text numberOfLines={5}>{params.Description}</Text>
        </SafeAreaView>
    );
};

export default OverviewScreen;
