import React from 'react';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { MainScreensStack } from '@app/constants/navigation.constants';
import Router from '@src/Router';
import HomeNavigation from '@src/features/home/navigation';
import ProductListNavigation from '@src/features/productList/navigation';
import CartNavigation from '@src/features/cart/navigation';

const MainNavigator = createStackNavigator();

const NavigationStack: React.FC = () => {
    const getOptions = () =>
        ({
            headerShown: false,
            gestureEnabled: false,
            ...routeOptions
        } as StackNavigationOptions);

    return (
        <MainNavigator.Navigator
            initialRouteName={MainScreensStack.ROUTER}
            screenOptions={getOptions}>
            <MainNavigator.Screen name={MainScreensStack.ROUTER} component={Router} />
            <MainNavigator.Screen name={MainScreensStack.HOME} component={HomeNavigation} />
            <MainNavigator.Screen
                name={MainScreensStack.PRODUCT_LIST}
                component={ProductListNavigation}
            />
            <MainNavigator.Screen name={MainScreensStack.Cart} component={CartNavigation} />
        </MainNavigator.Navigator>
    );
};

const routeOptions = () => ({ animationEnabled: false });

export default NavigationStack;
