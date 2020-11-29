import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    f1: {flex: 1},
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
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
    },
});

export default styles;
