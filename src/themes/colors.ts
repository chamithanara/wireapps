import { ColorTypes } from '@app/constants/types/theme.types';

const LightThemeColors: ColorTypes = {
    TRANSPARENT: 'transparent',
    App: {
        PRIMARY: '#111111',
        SECONDARY: '#FFFFFF'
    },
    Text: {
        PRIMARY: '#000000',
        INVERTED: '#FFFFFF',
        SECONDARY: '#6F6F6F',
        ERROR: '#ED0404'
    },
    TextInput: {
        VALUES: '#000000',
        CAPTION: '#6F6F6F',
        PLACEHOLDER: '#DCDCDC',
        CURSOR: '#24D86D',
        SEARCH_PLACEHOLDER: '#00000040',
        LIMIT: '#ff0000'
    },
    TabBar: {
        ACTIVE_TINT: '#1A1A1A',
        INACTIVE_TINT: '#9D9D9D'
    },
    Background: {
        PRIMARY: '#FFFFFF'
    }
};

const DarkThemeColors: ColorTypes = {
    TRANSPARENT: 'transparent',
    App: {
        PRIMARY: '#111111',
        SECONDARY: '#FFFFFF'
    },
    Text: {
        PRIMARY: '#000000',
        INVERTED: '#000000',
        SECONDARY: '#6F6F6F',
        ERROR: '#ED0404'
    },
    TextInput: {
        VALUES: '#000000',
        CAPTION: '#6F6F6F',
        PLACEHOLDER: '#DCDCDC',
        CURSOR: '#24D86D',
        SEARCH_PLACEHOLDER: '#00000040',
        LIMIT: '#ff0000'
    },
    TabBar: {
        ACTIVE_TINT: '#1A1A1A',
        INACTIVE_TINT: '#9D9D9D'
    },
    Background: {
        PRIMARY: '#FFFFFF'
    }
};

export { LightThemeColors, DarkThemeColors };
