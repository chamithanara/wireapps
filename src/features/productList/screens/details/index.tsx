import { ParamListBase, RouteProp } from '@react-navigation/native';
import { AppHeader } from '@src/components';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Product } from '../../api/productList.api.types';

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

    return (
        <View style={styles.container}>
            <AppHeader renderLeftComponent renderRightComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
});

export default ProductDetails;
