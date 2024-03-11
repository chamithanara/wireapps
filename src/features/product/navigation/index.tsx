import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductScreenStack } from '../constants/product.navigation.constants';
import Product from '../screens';
import ProductDetails from '../screens/details';

const Navigator = createStackNavigator();

const ProductNavigation: React.FC = () => (
    <Navigator.Navigator
        initialRouteName={ProductScreenStack.LANDING}
        screenOptions={() => ({
            headerShown: false
        })}>
        <Navigator.Screen name={ProductScreenStack.LANDING} component={Product} />
        <Navigator.Screen name={ProductScreenStack.DETAILS} component={ProductDetails} />
    </Navigator.Navigator>
);

export default ProductNavigation;
