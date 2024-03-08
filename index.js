import React from 'react';
import {AppRegistry} from 'react-native';
import App from '@app/Entrypoint';
import {name as appName} from './app.json';

const renderApp = () => {
    return <App />;
};

AppRegistry.registerComponent(appName, () => renderApp);
