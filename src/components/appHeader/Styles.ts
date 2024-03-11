import { StyleSheet } from 'react-native';

import Theme from '@src/themes/index';
import { hasNotch } from 'react-native-device-info';

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
        paddingTop: hasNotch() ? 70 : 40,
        backgroundColor: Theme.Colors.Background.PRIMARY,
        borderBottomColor: Theme.Colors.Border.LIGHT,
        borderBottomWidth: 0.5,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowColor: Theme.Colors.Background.SECONDARY
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
    },
    rightCountContainer: {
        position: 'absolute',
        backgroundColor: Theme.Colors.Background.DESCRIPTION_TITLE,
        marginLeft: 15,
        margin: 0,
        padding: 0,
        borderRadius: 10,
        width: 17,
        height: 17,
        justifyContent: 'center'
    },
    rightCountText: { marginLeft: 5 },
    rightText: {
        textAlign: 'right',
        width: 72,
        height: 20
    }
});

export default Styles;
