import { MainScreensStack } from '@app/constants/navigation.constants';
import NavigationServices from '@app/navigation/NavigationServices';
import { ParamListBase } from '@react-navigation/native';
import { HomeScreenStack } from '@src/features/home/constants/home.navigation.constants';
import { ProductListScreenStack } from '../constants/productList.navigation.constants';

const navigateToProductList = (params?: ParamListBase) => {
    NavigationServices.navigate(MainScreensStack.HOME, {
        screen: HomeScreenStack.PRODUCT_LIST,
        params: {
            screen: ProductListScreenStack.LANDING,
            params
        }
    });
};

const navigateToProductDetails = (params?: ParamListBase) => {
    NavigationServices.navigate(MainScreensStack.PRODUCT_LIST, {
        screen: ProductListScreenStack.DETAILS,
        params
    });
};

export default {
    navigateToProductList,
    navigateToProductDetails
};
