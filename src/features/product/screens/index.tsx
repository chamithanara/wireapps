import NavigationHelpers from '@app/navigation/NavigationHelpers';
import { useReduxDispatch, useReduxSelector } from '@app/store';
import { hasNotch } from 'react-native-device-info';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { FlatList, ListRenderItem, RefreshControl, StyleSheet, View } from 'react-native';

import AppHeader from '@src/components/appHeader';
import { Strings } from '@src/strings';
import Theme from '@src/themes';
import { CustomText, LoadingIndicator } from '@src/components';
import { FONT_SIZES } from '@app/constants/generic.constants';
import { ProductActions } from '../redux/product.slice';
import { productLoading, productSelector } from '../redux/product.selectors';
import { Product } from '../api/product.api.types';
import ProductItem from '../components/product';

const ProductList: FC = () => {
    const dispatch = useReduxDispatch();
    const productsList = useReduxSelector(productSelector);
    const productsLoading = useReduxSelector(productLoading);

    const getProductList = useCallback(() => {
        dispatch(ProductActions.requestProduct());
    }, [dispatch]);

    useEffect(() => {
        getProductList();
    }, [dispatch, getProductList]);

    const onClickShoppingCart = useCallback(() => {
        NavigationHelpers.navigateToCart();
    }, []);

    const renderItem: ListRenderItem<Product> = useCallback(
        ({ item }) => <ProductItem product={item} />,
        []
    );

    const renderEmptyMessage = useMemo(
        () => (
            <View style={styles.emptyMessageContainer}>
                <CustomText
                    fontSize={FONT_SIZES.Caption}
                    fontWeight="500"
                    text={Strings.productList.emptyMessage}
                />
            </View>
        ),
        []
    );

    const renderContent = useMemo(
        () =>
            productsList.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={productsList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    refreshControl={
                        <RefreshControl refreshing={false} onRefresh={getProductList} />
                    }
                />
            ) : (
                renderEmptyMessage
            ),
        [getProductList, productsList, renderEmptyMessage, renderItem]
    );

    return (
        <View style={styles.container}>
            <AppHeader
                centerText={Strings.navigationTitle.productsList}
                renderCenterComponent
                renderRightComponent
                renderRightCountComponent
                onRightActionPress={onClickShoppingCart}
            />
            {productsLoading ? (
                <LoadingIndicator color={Theme.Colors.Background.SECONDARY} />
            ) : (
                renderContent
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: hasNotch() ? '22%' : '17%'
    },
    emptyMessageContainer: {
        marginTop: 50,
        alignItems: 'center'
    }
});

export default ProductList;
