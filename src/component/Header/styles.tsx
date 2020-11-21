import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 16,
    },
    rightColumn: {
        flex: 1,
    },
    leftColumn: {
        flex: 1,
        alignItems: 'flex-end',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    flex60: {flex: 0.6},
    flex100: {flex: 1},
});

export default styles;
