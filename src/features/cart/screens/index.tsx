import { AppHeader } from '@src/components';
import { Strings } from '@src/strings';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const Cart: FC = () => (
    <View style={styles.container}>
        <AppHeader renderCenterComponent centerText={Strings.navigationTitle.cart} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
});

export default Cart;
