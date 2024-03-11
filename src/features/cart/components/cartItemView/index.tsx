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
            <View className={`${variantStyles.detailWrapper}`}>
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
            <View className={`${variantStyles.iconView}`}>
                <View className={`${variantStyles.deleteIcon}`}>
                    <TouchableOpacity onPress={handleRemoveAllItem}>
                        <Image
                            source={Theme.Images.icons.delete}
                            className={`${variantStyles.deleteImage}`}
                        />
                    </TouchableOpacity>
                </View>
                <View className={`${variantStyles.quantityView}`}>
                    <TouchableOpacity onPress={handleRemoveItem} disabled={item.quantity === 1}>
                        <Image
                            source={Theme.Images.icons.minus}
                            className={`${variantStyles.minusImage}`}
                        />
                    </TouchableOpacity>
                    <CustomText text={item.quantity.toString()} />
                    <TouchableOpacity onPress={handleAddItem}>
                        <Image
                            source={Theme.Images.icons.plus}
                            className={`${variantStyles.plusImage}`}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        ),
        [handleAddItem, handleRemoveAllItem, handleRemoveItem, item.quantity]
    );

    return (
        <View className={`${variantStyles.container}`} style={styles.container}>
            <View className={`${variantStyles.imageContainer}`}>
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

const variantStyles = {
    container: 'flex-1 flex-row p-3 rounded-xl shadow-black bg-white my-1 mx-1.5',
    imageContainer: 'justify-center items-center w-24 h-24',
    detailWrapper: 'flex-1 ml-4',
    iconView: 'flex-col justify-between',
    quantityView: 'justify-between items-center flex-row rounded-lg w-16',
    deleteIcon: 'self-end',
    deleteImage: 'w-5 h-5',
    minusImage: 'w-5 h-5',
    plusImage: 'w-5 h-5'
};

const styles = StyleSheet.create({
    container: {
        shadowColor: Theme.Colors.Background.SECONDARY,
        shadowOpacity: 0.2
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 24
    },
    price: {
        marginTop: 10
    },
    sizes: {
        marginTop: 15
    },
    colors: {
        marginTop: 5
    }
});

export default memo(CartItemView);
