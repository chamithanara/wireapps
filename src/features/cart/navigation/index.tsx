import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CartScreenStack } from '../constants/cart.navigation.constants';
import Cart from '../screens';

const Navigator = createStackNavigator();

const CartNavigation: React.FC = () => (
    <Navigator.Navigator
        initialRouteName={CartScreenStack.LANDING}
        screenOptions={() => ({
            headerShown: false
        })}>
        <Navigator.Screen name={CartScreenStack.LANDING} component={Cart} />
    </Navigator.Navigator>
);

export default CartNavigation;
