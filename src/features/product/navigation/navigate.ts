import { MainScreensStack } from '@app/constants/navigation.constants';
import NavigationServices from '@app/navigation/NavigationServices';
import { ParamListBase } from '@react-navigation/native';
import { HomeScreenStack } from '@src/features/home/constants/home.navigation.constants';
import { ProductScreenStack } from '../constants/product.navigation.constants';

const navigateToProduct = (params?: ParamListBase) => {
    NavigationServices.navigate(MainScreensStack.HOME, {
        screen: HomeScreenStack.PRODUCT_LIST,
        params: {
            screen: ProductScreenStack.LANDING,
            params
        }
    });
};

const navigateToProductDetails = (params?: ParamListBase) => {
    NavigationServices.navigate(MainScreensStack.PRODUCT, {
        screen: ProductScreenStack.DETAILS,
        params
    });
};

export default {
    navigateToProduct,
    navigateToProductDetails
};
