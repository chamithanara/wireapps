import React, { useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Theme from '@src/themes';
import { CachedImage, CustomText } from '@src/components';
import FastImage from 'react-native-fast-image';
import { FONT_SIZES } from '@app/constants/generic.constants';
import NavigationHelpers from '@app/navigation/NavigationHelpers';
import { Product } from '../../api/productList.api.types';

interface Props {
    product: Product;
}

const ProductItem: React.FC<Props> = props => {
    const { product } = props;

    const onPressProduct = useCallback(() => {
        const navParams = {
            product
        };
        NavigationHelpers.navigateToProductDetails({ payload: navParams });
    }, [product]);

    return (
        <TouchableOpacity style={styles.card} onPress={onPressProduct}>
            <CachedImage
                resizeMode={FastImage.resizeMode.contain}
                customStyles={styles.thumb}
                uri={product.mainImage}
            />
            <View style={styles.infoContainer}>
                <CustomText
                    fontSize={FONT_SIZES.SmallTitle}
                    fontWeight="bold"
                    text={product.name}
                />
                <CustomText
                    style={styles.price}
                    fontWeight="400"
                    text={[product.price.currency, product.price.amount].join(' ')}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Theme.Colors.Background.PRIMARY,
        borderRadius: 16,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: Theme.Colors.Background.SECONDARY,
        marginVertical: 3,
        marginHorizontal: 5
    },
    thumb: {
        height: 200,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%'
    },
    infoContainer: {
        padding: 16
    },
    price: {
        marginTop: 8,
        marginBottom: 8
    }
});

export default ProductItem;
