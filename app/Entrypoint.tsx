/**
 * React Native App
 * Everything starts from the EntryPoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from '@app/navigation';

import initializeStore from './store';

const { persistor, store } = initializeStore();

const EntryPoint: React.FC = () => (
    <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <SafeAreaProvider>
                <Navigator />
            </SafeAreaProvider>
        </PersistGate>
    </Provider>
);

export default EntryPoint;
