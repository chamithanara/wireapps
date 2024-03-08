import { MainScreensStack } from '@app/constants/navigation.constants';
import NavigationServices from '@app/navigation/NavigationServices';
import { ParamListBase } from '@react-navigation/native';
import { CartScreenStack } from '../constants/cart.navigation.constants';

const navigateToCartLanding = (params?: ParamListBase) => {
    NavigationServices.navigate(MainScreensStack.Cart, {
        screen: CartScreenStack.LANDING,
        params
    });
};

export default {
    navigateToCartLanding
};
