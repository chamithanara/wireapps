import { View, StyleSheet, Platform, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import {
    createBottomTabNavigator,
    BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs';
import { hasNotch } from 'react-native-device-info';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Product from '@src/features/product/screens';
import Cart from '@features/cart/screens';
import Theme from '@src/themes';
import { FONT_SIZES } from '@app/constants/generic.constants';
import { HomeScreenStack } from '@features/home/constants/home.navigation.constants';
import { Strings } from '@src/strings';

export interface RenderTabBarParams {
    focused: boolean;
    color: string;
    size: number;
}

const TabItemContainerHeight = 64;

const HomeTabNavigator: React.FC = () => {
    const Tab = createBottomTabNavigator();
    const { bottom } = useSafeAreaInsets();

    const renderIcon = (iconName: ImageSourcePropType, color: string) => (
        <View style={[styles.iconContainer]}>
            <Image source={iconName} style={[{ tintColor: color }, styles.iconStyles]} />
        </View>
    );

    const renderProductTabBarIcon = ({ color }: RenderTabBarParams) =>
        renderIcon(Theme.Images.tabs.product, color);

    const renderCartTabBarIcon = ({ color }: RenderTabBarParams) =>
        renderIcon(Theme.Images.tabs.cart, color);

    return (
        <Tab.Navigator
            screenOptions={{
                ...tabBarOptions,
                tabBarStyle: [
                    tabBarOptions.tabBarStyle,
                    { height: TabItemContainerHeight + bottom, paddingBottom: bottom }
                ]
            }}>
            <Tab.Screen
                name={HomeScreenStack.PRODUCT_LIST}
                component={Product}
                options={{
                    tabBarLabel: Strings.tabBar.home,
                    tabBarIcon: renderProductTabBarIcon
                }}
            />
            <Tab.Screen
                name={HomeScreenStack.CART}
                component={Cart}
                options={{
                    tabBarLabel: Strings.tabBar.cart,
                    tabBarIcon: renderCartTabBarIcon
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        marginBottom: Platform.OS === 'ios' ? -6 : -10
    },
    generalStyles: {
        paddingHorizontal: '5.6%',
        paddingBottom: 8,
        paddingTop: 8
    },
    tabStyles: {
        gap: 8,
        marginBottom: hasNotch() ? 0 : 8
    },
    labelStyles: {
        fontSize: FONT_SIZES.BitTiny,
        fontWeight: '500'
    },
    iconStyles: {
        height: 20,
        width: 24
    }
});

const tabBarOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabelPosition: 'below-icon',
    tabBarAllowFontScaling: false,
    tabBarLabelStyle: styles.labelStyles,
    tabBarStyle: styles.generalStyles,
    tabBarItemStyle: styles.tabStyles,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: Theme.Colors.TabBar.ACTIVE_TINT,
    tabBarInactiveTintColor: Theme.Colors.TabBar.INACTIVE_TINT
};

export default HomeTabNavigator;
