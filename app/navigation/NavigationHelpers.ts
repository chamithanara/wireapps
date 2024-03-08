import HomeNavigateHelpers from '@src/features/home/navigation/navigate';
import ProductListNavigateHelpers from '@src/features/productList/navigation/navigate';
import CartNavigateHelpers from '@src/features/cart/navigation/navigate';

export default {
    ...HomeNavigateHelpers,
    ...ProductListNavigateHelpers,
    ...CartNavigateHelpers
};
