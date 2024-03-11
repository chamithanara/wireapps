import HomeNavigateHelpers from '@src/features/home/navigation/navigate';
import ProductNavigateHelpers from '@src/features/product/navigation/navigate';
import CartNavigateHelpers from '@src/features/cart/navigation/navigate';

export default {
    ...HomeNavigateHelpers,
    ...ProductNavigateHelpers,
    ...CartNavigateHelpers
};
