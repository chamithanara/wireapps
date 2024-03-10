import React, { memo, useCallback, useMemo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Theme from '@src/themes';
import { AlertPopup, CustomText } from '@src/components';
import { useReduxDispatch } from '@app/store';
import { SecuredActions } from '@app/redux/secured.slice';
import { concatTwoStrings } from '@src/utils/string.utils';

import CachedImage from '@src/components/cachedImage';
import { Strings } from '@src/strings';
import { CartItem } from '../../constants/cart.types';

type Props = {
    item: CartItem;
};

const CartItemView: React.FC<Props> = props => {
    const { item } = props;
    const dispatch = useReduxDispatch();

    const handleAddItem = useCallback(() => {
        dispatch(SecuredActions.addToCart(item));
    }, [dispatch, item]);

    const handleRemoveItem = useCallback(() => {
        dispatch(SecuredActions.removeFromCart(item));
    }, [dispatch, item]);

    const handleRemoveAllItem = useCallback(() => {
        AlertPopup.showAlert({
            title: Strings.cart.removeFromCart,
            message: Strings.cart.removeItemMessage,
            okLabel: Strings.cart.removeOkLabel,
            cancelLabel: Strings.cart.removeNoLabel,
            onOkAction: () => {
                dispatch(SecuredActions.removeAllFromCart(item));
            }
        });
    }, [dispatch, item]);

    const renderDetailsView = useMemo(
        () => (
            <View style={styles.detailWrapper}>
                <CustomText fontWeight="bold" text={item.product.name} numberOfLines={2} />
                <CustomText
                    fontWeight="500"
                    style={styles.price}
                    text={concatTwoStrings(
                        item.product.price.currency,
                        item.product.price.amount.toString(),
                        Strings.product.concatSpace
                    )}
                />
                <CustomText
                    style={styles.sizes}
                    text={concatTwoStrings(
                        Strings.product.size,
                        item.size.toString(),
                        Strings.product.concatColon
                    )}
                />
                <CustomText
                    style={styles.colors}
                    text={concatTwoStrings(
                        Strings.product.color,
                        item.color,
                        Strings.product.concatColon
                    )}
                />
            </View>
        ),
        [
            item.color,
            item.product.name,
            item.product.price.amount,
            item.product.price.currency,
            item.size
        ]
    );

    const renderRightIconView = useMemo(
        () => (
            <View style={styles.iconView}>
                <View style={styles.deleteIcon}>
                    <TouchableOpacity onPress={handleRemoveAllItem}>
                        <Image source={Theme.Images.icons.delete} style={styles.deleteImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.quantityView}>
                    <TouchableOpacity onPress={handleRemoveItem}>
                        <Image source={Theme.Images.icons.minus} style={styles.minusImage} />
                    </TouchableOpacity>
                    <CustomText text={item.quantity.toString()} />
                    <TouchableOpacity onPress={handleAddItem}>
                        <Image source={Theme.Images.icons.plus} style={styles.plusImage} />
                    </TouchableOpacity>
                </View>
            </View>
        ),
        [handleAddItem, handleRemoveAllItem, handleRemoveItem, item.quantity]
    );

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <CachedImage
                    defaultImage={Theme.Images.logo.wireApps}
                    customStyles={styles.image}
                    uri={item.product.mainImage}
                />
            </View>
            {renderDetailsView}
            {renderRightIconView}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Theme.Colors.Background.PRIMARY,
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: Theme.Colors.Background.SECONDARY,
        marginVertical: 3,
        marginHorizontal: 5
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 24
    },
    detailWrapper: {
        flex: 1,
        marginLeft: 15,
        marginRight: 12
    },
    price: {
        marginTop: 10
    },
    sizes: {
        marginTop: 15
    },
    colors: {
        marginTop: 5
    },
    iconView: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    quantityView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 5,
        width: 65
    },
    deleteIcon: {
        alignSelf: 'flex-end'
    },
    minusImage: {
        width: 20,
        height: 20
    },
    plusImage: {
        width: 20,
        height: 20
    },
    deleteImage: {
        width: 20,
        height: 20
    }
});

export default memo(CartItemView);
