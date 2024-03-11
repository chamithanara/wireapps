import { StyleSheet } from 'react-native';

import Theme from '@src/themes';

const styles = StyleSheet.create({
    buttonText: {
        paddingHorizontal: 2,
        color: Theme.Colors.Text.INVERTED
    },
    button: {
        borderRadius: 100,
        width: '100%',
        backgroundColor: Theme.Colors.Button.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 30
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondaryButton: {
        backgroundColor: Theme.Colors.Button.TRANSPARENT,
        borderWidth: 2,
        borderColor: Theme.Colors.Button.PRIMARY
    },
    secondaryText: {
        color: Theme.Colors.Text.PRIMARY
    },
    textButton: {
        backgroundColor: Theme.Colors.Button.TRANSPARENT,
        borderColor: Theme.Colors.Button.TRANSPARENT,
        borderWidth: 0
    },
    textButtonText: {
        color: Theme.Colors.Text.PRIMARY,
        lineHeight: 26
    },
    disabledButton: {
        backgroundColor: Theme.Colors.Button.DISABLED,
        borderColor: Theme.Colors.Button.DISABLED
    },
    disabledText: {
        color: Theme.Colors.Text.DISABLED
    },
    primaryInvertedButtonText: {
        color: Theme.Colors.Text.PRIMARY
    },
    primaryInvertedButtonWithBorder: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: Theme.Colors.Button.SECONDARY,
        borderColor: Theme.Colors.Button.PRIMARY,
        borderWidth: 1.5
    }
});

export default styles;
