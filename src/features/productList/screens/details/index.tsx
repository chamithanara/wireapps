import { AppHeader } from '@src/components';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const ProductDetails: FC = () => (
    <View style={styles.container}>
        <AppHeader
            renderCenterComponent
            centerText="123"
            renderLeftComponent
            renderRightComponent
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
});

export default ProductDetails;
