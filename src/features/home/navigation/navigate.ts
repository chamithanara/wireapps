import { ParamListBase } from '@react-navigation/native';

import { MainScreensStack } from '@app/constants/navigation.constants';
import NavigationServices from '@app/navigation/NavigationServices';
import { HomeScreenStack } from '../constants/home.navigation.constants';

const navigateToHome = (params?: ParamListBase) => {
    NavigationServices.navigate(MainScreensStack.HOME, {
        screen: HomeScreenStack.PRODUCT_LIST,
        params
    });
};

const navigateToCart = (params?: ParamListBase) => {
    NavigationServices.navigate(MainScreensStack.HOME, {
        screen: HomeScreenStack.CART,
        params
    });
};

export default {
    navigateToHome,
    navigateToCart
};
