import { ColorTypes } from '@app/constants/types/theme.types';

const LightThemeColors: ColorTypes = {
    TRANSPARENT: 'transparent',
    Text: {
        PRIMARY: '#000000',
        INVERTED: '#FFFFFF',
        SECONDARY: '#6F6F6F',
        ERROR: '#ED0404',
        DISABLED: '#D1D1D1',
        AVAILABLE: '#24D86D'
    },
    TabBar: {
        ACTIVE_TINT: '#1A1A1A',
        INACTIVE_TINT: '#9D9D9D'
    },
    Border: {
        LIGHT: '#DCDCDC',
        DARK: '#000000'
    },
    Background: {
        PRIMARY: '#FFFFFF',
        SECONDARY: '#111111',
        DESCRIPTION_TITLE: '#E5E7E9',
        DESCRIPTION_VALUE: '#F8F9F9'
    },
    Button: {
        PRIMARY: '#111111',
        SECONDARY: '#FFFFFF',
        TRANSPARENT: 'transparent',
        DISABLED: '#F6F6F6',
    }
};

const DarkThemeColors: ColorTypes = {
    TRANSPARENT: 'transparent',
    Text: {
        PRIMARY: '#000000',
        INVERTED: '#000000',
        SECONDARY: '#6F6F6F',
        ERROR: '#ED0404',
        DISABLED: '#D1D1D1',
        AVAILABLE: '#24D86D'
    },
    TabBar: {
        ACTIVE_TINT: '#1A1A1A',
        INACTIVE_TINT: '#9D9D9D'
    },
    Border: {
        LIGHT: '#DCDCDC',
        DARK: '#000000'
    },
    Background: {
        PRIMARY: '#FFFFFF',
        SECONDARY: '#111111',
        DESCRIPTION_TITLE: '#E5E7E9',
        DESCRIPTION_VALUE: '#F8F9F9'
    },
    Button: {
        PRIMARY: '#111111',
        SECONDARY: '#FFFFFF',
        TRANSPARENT: 'transparent',
        DISABLED: '#F6F6F6',
    }
};

export { LightThemeColors, DarkThemeColors };
