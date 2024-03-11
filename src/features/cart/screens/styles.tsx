import { StyleSheet } from 'react-native';

import Theme from '@src/themes';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 74
    },
    cartList: {
        width: '100%',
        height: '90%'
    },
    totalContainer: {
        backgroundColor: Theme.Colors.Background.DESCRIPTION_TITLE,
        paddingRight: 12,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowOpacity: 0.3,
        left: 0,
        right: 0,
        bottom: 0,
        shadowRadius: 4,
        shadowColor: Theme.Colors.Background.SECONDARY,
        width: '100%',
        height: '11%'
    },
    totalCount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 14
    },
    totalPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
        paddingBottom: 10
    },
    totalText: {
        paddingHorizontal: 12
    },
    emptyMessageContainer: {
        marginTop: 50,
        alignItems: 'center'
    }
});

export default styles;
