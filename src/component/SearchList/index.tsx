import React from 'react';
import {Keyboard} from 'react-native';
import {ListItem} from 'react-native-elements';

import {RawStockSearch} from '../../models/AlphaVantage';
import {useAppDispatch} from '../../store';
import ChartOptionsActions from '../../store/reducers/ChartOptions/actions';
import styles from './styles';

interface IProps {
    setSearchActive: (value: boolean) => void;
    companies: RawStockSearch;
}

const SearchList: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch();
    const {
        companies: {bestMatches},
        setSearchActive,
    } = props;

    return (
        <>
            {bestMatches.map((l, i) => (
                <ListItem
                    key={i}
                    bottomDivider
                    style={styles.list}
                    onPress={() => {
                        Keyboard.dismiss();
                        setSearchActive(false);
                        dispatch(ChartOptionsActions.setSymbol(l['1. symbol']));
                    }}>
                    <ListItem.Content>
                        <ListItem.Title>{l['2. name']}</ListItem.Title>
                        <ListItem.Subtitle>{`${l['1. symbol']} (${l['8. currency']})`}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </>
    );
};

export default SearchList;
