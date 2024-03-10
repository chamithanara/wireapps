import { AlertPopup, AppHeader, CustomText } from '@src/components';
import { Strings } from '@src/strings';
import React, { FC, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useReduxDispatch, useReduxSelector } from '@app/store';
import {
    cartListCountSelector,
    cartListSelector,
    cartListTotalSelector
} from '@app/redux/secured.selector';
import { FONT_SIZES } from '@app/constants/generic.constants';
import { SecuredActions } from '@app/redux/secured.slice';

import { concatStrings, concatTwoStrings } from '@src/utils/string.utils';
import { CartItem } from '../constants/cart.types';
import CartItemView from '../components/cartItemView';
import styles from './styles';

const Cart: FC = () => {
    const dispatch = useReduxDispatch();
    const cartList = useReduxSelector(cartListSelector);
    const cartListTotal = useReduxSelector(cartListTotalSelector);
    const cartTotalItems = useReduxSelector(cartListCountSelector);

    const renderItem: ListRenderItem<CartItem> = useCallback(
        ({ item }) => <CartItemView item={item} />,
        []
    );

    const removeAllCartItems = useCallback(() => {
        AlertPopup.showAlert({
            title: Strings.cart.removeAllFromCart,
            message: Strings.cart.removeAllItemsMessage,
            okLabel: Strings.cart.removeOkLabel,
            cancelLabel: Strings.cart.removeNoLabel,
            onOkAction: () => {
                dispatch(SecuredActions.resetCart());
            }
        });
    }, [dispatch]);

    const renderCartBottomContent = useMemo(
        () => (
            <View style={styles.totalContainer}>
                <View style={styles.totalCount}>
                    <CustomText
                        fontWeight="500"
                        fontSize={FONT_SIZES.Body}
                        text={Strings.cart.totalItems}
                        style={styles.totalText}
                    />
                    <CustomText
                        fontWeight="500"
                        fontSize={FONT_SIZES.Body}
                        text={cartTotalItems.toString()}
                    />
                </View>
                <View style={styles.totalPrice}>
                    <CustomText
                        fontWeight="bold"
                        fontSize={FONT_SIZES.SmallTitle}
                        text={Strings.cart.total}
                        style={styles.totalText}
                    />
                    <CustomText
                        fontWeight="bold"
                        fontSize={FONT_SIZES.SmallTitle}
                        text={concatTwoStrings(
                            Strings.cart.currency,
                            cartListTotal,
                            Strings.product.concatSpace
                        )}
                    />
                </View>
            </View>
        ),
        [cartListTotal, cartTotalItems]
    );

    const renderCartContent = useMemo(
        () => (
            <>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={cartList}
                    renderItem={renderItem}
                    keyExtractor={item =>
                        concatStrings(
                            [item.product.id.toString(), item.color, item.size.toString()],
                            Strings.product.concatColon
                        )
                    }
                    style={styles.cartList}
                />
                {renderCartBottomContent}
            </>
        ),
        [cartList, renderCartBottomContent, renderItem]
    );

    const renderEmptyMessage = useMemo(
        () => (
            <View style={styles.emptyMessageContainer}>
                <CustomText
                    fontSize={FONT_SIZES.Caption}
                    fontWeight="500"
                    text={Strings.cart.emptyMessage}
                />
            </View>
        ),
        []
    );

    return (
        <View style={styles.container}>
            <AppHeader
                renderCenterComponent
                centerText={Strings.navigationTitle.cart}
                renderRightComponent={cartList.length > 0}
                rightButtonText={Strings.cart.removeAll}
                onRightActionPress={removeAllCartItems}
            />
            {cartList.length > 0 ? renderCartContent : renderEmptyMessage}
        </View>
    );
};

export default Cart;
