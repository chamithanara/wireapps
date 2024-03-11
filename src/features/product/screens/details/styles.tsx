import { StyleSheet } from 'react-native';

import Theme from '@src/themes/index';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    scrollViewContainer: {
        backgroundColor: Theme.Colors.Background.PRIMARY,
        flex: 1
    },
    image: {
        width: '100%',
        aspectRatio: 1.1
    },
    information: {
        padding: 20
    },
    name: {
        marginBottom: 8
    },
    price: {
        fontSize: 18,
        color: Theme.Colors.Text.SECONDARY,
        marginBottom: 10
    },
    stockStatus: {
        marginBottom: 15
    },
    description: {
        lineHeight: 24,
        marginTop: 18
    },
    descriptionContainer: {
        marginTop: 20
    },
    buttonColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3,
        borderWidth: 4,
        borderColor: Theme.Colors.Background.DESCRIPTION_TITLE
    },
    buttonSize: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: Theme.Colors.Border.LIGHT,
        borderWidth: 2,
        marginHorizontal: 3,
        backgroundColor: Theme.Colors.Background.PRIMARY,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentColors: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    colorsList: {
        paddingTop: 10
    },
    contentSize: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 18
    },
    sizeList: {
        paddingTop: 10
    },
    addToCartButton: {
        marginBottom: '8%',
        padding: 16,
        width: '100%'
    },
    buttonContainer: {
        backgroundColor: Theme.Colors.Background.PRIMARY,
        paddingLeft: 24,
        paddingRight: 24
    }
});

export default styles;
