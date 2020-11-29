import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    searchbarContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: Dimensions.get('window').width,
    },
});

export default styles;
