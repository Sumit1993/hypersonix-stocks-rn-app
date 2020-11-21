import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
});

export default styles;
