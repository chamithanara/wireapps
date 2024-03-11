import React from 'react';
import { AppRegistry } from 'react-native';
import App from '@app/Entrypoint';
import { name as appName } from './app.json';

// eslint-disable-next-line react/jsx-filename-extension
const renderApp = () => <App />;

AppRegistry.registerComponent(appName, () => renderApp);
