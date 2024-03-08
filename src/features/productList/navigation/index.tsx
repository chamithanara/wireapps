import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductListScreenStack } from '../constants/productList.navigation.constants';
import ProductList from '../screens';
import ProductDetails from '../screens/details';

const Navigator = createStackNavigator();

const ProductListNavigation: React.FC = () => (
    <Navigator.Navigator
        initialRouteName={ProductListScreenStack.LANDING}
        screenOptions={() => ({
            headerShown: false
        })}>
        <Navigator.Screen name={ProductListScreenStack.LANDING} component={ProductList} />
        <Navigator.Screen name={ProductListScreenStack.DETAILS} component={ProductDetails} />
    </Navigator.Navigator>
);

export default ProductListNavigation;
