import { ParamListBase, RouteProp } from '@react-navigation/native';
import { AppHeader, Button, CustomText } from '@src/components';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, ListRenderItem, ScrollView, TouchableOpacity, View } from 'react-native';
import CachedImage from '@src/components/cachedImage';
import Theme from '@src/themes';
import { concatTwoStrings } from '@src/utils/string.utils';
import FastImage from 'react-native-fast-image';
import { FONT_SIZES } from '@app/constants/generic.constants';
import { Strings } from '@src/strings';
import { useReduxDispatch } from '@app/store';
import { SecuredActions } from '@app/redux/secured.slice';
import NavigationHelpers from '@app/navigation/NavigationHelpers';

import { Product } from '../../api/productList.api.types';
import ProductDescriptionItem from '../../components/productDescription';
import { multiColors, productMultiColors } from '../../constants/productList.constants';
import styles from './styles';

type ProductDetailsRouteProps = RouteProp<ParamListBase, 'ProductList/Details'>;

export interface Props {
    route?: ProductDetailsRouteProps;
}

interface NavParams {
    payload: {
        product: Product;
    };
}

const ProductDetails: FC = ({ route }: Props) => {
    const params = (route?.params as NavParams)?.payload || ({} as NavParams);
    const { product } = params;

    const dispatch = useReduxDispatch();
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<number>(0);
    const [addToCartButtonDisabled, setAddToCartButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (selectedColor.length !== 0 && selectedSize !== 0) {
            setAddToCartButtonDisabled(false);
        }
    }, [selectedColor.length, selectedSize]);

    const onChangeColor = useCallback((color: string) => {
        setSelectedColor(color);
    }, []);

    const onChangeSize = useCallback((size: number) => {
        setSelectedSize(size);
    }, []);

    const renderColorItems: ListRenderItem<string> = useCallback(
        ({ item }) => (
            <TouchableOpacity
                onPress={() => onChangeColor(item)}
                style={[
                    styles.buttonColor,
                    {
                        backgroundColor: item,
                        borderColor:
                            selectedColor === item
                                ? Theme.Colors.Border.DARK
                                : Theme.Colors.Border.LIGHT
                    }
                ]}
            />
        ),
        [onChangeColor, selectedColor]
    );

    const renderSizeItems: ListRenderItem<number> = useCallback(
        ({ item }) => (
            <TouchableOpacity
                style={[
                    styles.buttonSize,
                    {
                        borderColor:
                            selectedSize === item
                                ? Theme.Colors.Border.DARK
                                : Theme.Colors.Border.LIGHT
                    }
                ]}
                onPress={() => onChangeSize(item)}>
                <CustomText text={item.toString()} />
            </TouchableOpacity>
        ),
        [onChangeSize, selectedSize]
    );

    const renderTopContent = useMemo(
        () => (
            <>
                <CustomText
                    style={styles.name}
                    text={product.name}
                    fontSize={FONT_SIZES.BigTitle}
                    fontWeight="bold"
                />
                <CustomText
                    style={styles.price}
                    text={concatTwoStrings(
                        product.price.currency,
                        product.price.amount.toString(),
                        Strings.product.concatSpace
                    )}
                    fontSize={FONT_SIZES.MediumTitle}
                    fontWeight="bold"
                />
            </>
        ),
        [product.name, product.price.amount, product.price.currency]
    );

    const getColors = useMemo(
        () => (product.colour === multiColors ? productMultiColors : [product.colour]),
        [product.colour]
    );

    const renderProductSpecifications = useMemo(
        () => (
            <>
                <View style={styles.contentColors}>
                    <CustomText text={Strings.product.selectColor} />
                    <FlatList
                        style={styles.colorsList}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={getColors}
                        renderItem={renderColorItems}
                        keyExtractor={item => item}
                        horizontal
                    />
                </View>
                <View style={styles.contentSize}>
                    <CustomText text={Strings.product.selectSize} />
                    <FlatList
                        style={styles.sizeList}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={product.sizes}
                        renderItem={renderSizeItems}
                        keyExtractor={item => item.toString()}
                        horizontal
                    />
                </View>
            </>
        ),
        [getColors, product.sizes, renderColorItems, renderSizeItems]
    );

    const renderProductDescriptionList = useMemo(
        () => (
            <>
                <CustomText style={styles.description} text={product.description} />
                <View style={styles.descriptionContainer}>
                    <ProductDescriptionItem
                        title={Strings.product.brand}
                        value={product.brandName}
                    />
                    <ProductDescriptionItem
                        title={Strings.product.sku}
                        value={product.SKU.toString()}
                    />
                </View>
            </>
        ),
        [product.SKU, product.brandName, product.description]
    );

    const addProductToCart = useCallback(() => {
        dispatch(
            SecuredActions.addToCart({
                product,
                color: selectedColor,
                size: selectedSize,
                quantity: 1
            })
        );
    }, [dispatch, product, selectedColor, selectedSize]);

    const onClickShoppingCart = useCallback(() => {
        NavigationHelpers.navigateToCart();
    }, []);

    return (
        <View style={styles.container}>
            <AppHeader
                renderLeftComponent
                renderRightComponent
                renderRightCountComponent
                onRightActionPress={onClickShoppingCart}
            />
            <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <CachedImage
                    customStyles={styles.image}
                    defaultImage={Theme.Images.logo.wireApps}
                    showDefaultImage
                    uri={product.mainImage}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.information}>
                    {renderTopContent}
                    {renderProductSpecifications}
                    {renderProductDescriptionList}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button
                    title={Strings.product.addToCart}
                    type="primary"
                    onPress={addProductToCart}
                    isDisabled={addToCartButtonDisabled}
                    buttonStyle={styles.addToCartButton}
                />
            </View>
        </View>
    );
};

export default ProductDetails;
