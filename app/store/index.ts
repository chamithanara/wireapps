import storage from '@react-native-async-storage/async-storage';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { getPersistConfig } from 'redux-deep-persist';
import createEncryptedStorage from 'redux-persist-encrypted-storage';
import { combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootReducer from './rootReducer';
import securedReducer from './securedReducer';
import rootSaga from './rootSagas';

export type RootState = ReturnType<typeof reducers>;

const securedStorage = createEncryptedStorage();

const securedConfig = getPersistConfig({
    key: 'secured',
    storage: securedStorage,
    timeout: 50000,
    whitelist: ['cartItems'],
    rootReducer: securedReducer
});

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

type SecuredReducerType = ReturnType<typeof securedReducer>;
const combinedReducer = combineReducers({
    secured: persistReducer<SecuredReducerType>(securedConfig, securedReducer),
    general: rootReducer
});

const config = {
    debug: false,
    key: 'root',
    storage,
    timeout: 50000,
    blacklist: ['secured', 'general'],
    rootReducer: combinedReducer
};

const reducers = persistReducer<ReturnType<typeof combinedReducer>>(config, combinedReducer);

// Creating Store
const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).prepend(middleware)
});

export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useSecuredReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
// for axios interceptor
export const getCurrentState = () => store.getState();
export const getDispatch = () => store.dispatch;

const persistor = persistStore(store);
const initializeStore = () => ({ persistor, store });
sagaMiddleware.run(rootSaga);

export default initializeStore;
