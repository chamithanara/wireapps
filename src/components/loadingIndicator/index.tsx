import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import Theme from '@src/themes';

const styles = StyleSheet.create({
    loadingWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50
    }
});

interface Props {
    color?: string;
    size?: number;
}

const LoadingIndicator: React.FC<Props> = props => {
    const { color = Theme.Colors.Background.PRIMARY, size = 25 } = props;
    return (
        <View style={styles.loadingWrapper}>
            <ActivityIndicator color={color} size={size} />
        </View>
    );
};

export default LoadingIndicator;
