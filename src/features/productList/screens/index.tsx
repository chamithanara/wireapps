import NavigationHelpers from '@app/navigation/NavigationHelpers';
import { useReduxDispatch, useReduxSelector } from '@app/store';
import AppHeader from '@src/components/appHeader';
import { Strings } from '@src/strings';
import React, { FC, useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { ProductListActions } from '../redux/productList.slice';
import { productsListSelector } from '../redux/productList.selectors';
import { Product } from '../api/productList.api.types';
import ProductItem from '../components/product';

const ProductList: FC = () => {
    const dispatch = useReduxDispatch();
    const productsList = useReduxSelector(productsListSelector);

    useEffect(() => {
        dispatch(ProductListActions.requestProductList());
    }, [dispatch]);

    const onClickShoppingCart = useCallback(() => {
        NavigationHelpers.navigateToCart();
    }, []);

    const renderItem: ListRenderItem<Product> = useCallback(
        ({ item }) => <ProductItem product={item} />,
        []
    );

    return (
        <View style={styles.container}>
            <AppHeader
                centerText={Strings.navigationTitle.productsList}
                renderCenterComponent
                renderRightComponent
                onRightActionPress={onClickShoppingCart}
            />
            {productsList.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={productsList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 95
    }
});

export default ProductList;
