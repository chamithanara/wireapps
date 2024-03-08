import { StyleSheet } from 'react-native';

import Theme from '@src/themes/index';

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rightContainer: {
        alignItems: 'flex-end'
    },
    leftContainer: {
        alignItems: 'flex-start'
    },
    subContainerSide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 24,
        zIndex: 5,
        paddingTop: 70,
        backgroundColor: Theme.Colors.Background.PRIMARY
    },
    primary: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        color: Theme.Colors.Text.PRIMARY,
        marginBottom: 5
    },
    centerItemWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 5
    },
    leftImage: {
        width: 10,
        height: 15,
        marginBottom: 8
    },
    rightImage: {
        width: 20,
        height: 20,
        marginBottom: 5
    }
});

export default Styles;
