/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ImageSourcePropType } from 'react-native';

const Images = {
    icons: {
        back: require('../assets/images/icons/back.png') as ImageSourcePropType,
        cart: require('../assets/images/icons/cart.png') as ImageSourcePropType
    },
    logo: {
        wireApps: require('../assets/images/logo/wireApps.png') as ImageSourcePropType
    },
    tabs: {
        productList: require('../assets/images/tabs/productList.png') as ImageSourcePropType,
        cart: require('../assets/images/tabs/cart.png') as ImageSourcePropType,
    }
};

export { Images };
