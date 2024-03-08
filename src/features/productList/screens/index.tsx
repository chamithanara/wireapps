import NavigationHelpers from '@app/navigation/NavigationHelpers';
import AppHeader from '@src/components/appHeader';
import { Strings } from '@src/strings';
import React, { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

const ProductList: FC = () => {
    const onClickShoppingCart = useCallback(() => {
        NavigationHelpers.navigateToCart();
    }, []);

    return (
        <View style={styles.container}>
            <AppHeader
                centerText={Strings.navigationTitle.productsList}
                renderCenterComponent
                renderRightComponent
                onRightActionPress={onClickShoppingCart}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
});

export default ProductList;
