import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { useReduxDispatch } from '@app/store';
import NavigationHelpers from '@app/navigation/NavigationHelpers';
import { DeviceOrientationTypes } from '@app/constants/enums/generic.enums';
import LoggingService from '@services/logs.service';
import Theme from './themes';
import appUtils from './utils/app.utils';

const Router = () => {
    const dispatch = useReduxDispatch();
    appUtils.setDeviceOrientation(DeviceOrientationTypes.PORTRAIT);

    useEffect(() => {
        Theme.setTheme('light');
    }, []);

    const handleRouting = useCallback(() => {
        try {
            NavigationHelpers.navigateToHome();
            SplashScreen.hide();
        } catch (error) {
            LoggingService.debug('error', error);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            handleRouting();
        }, 0);
    }, [dispatch, handleRouting]);

    return <View />;
};

export default Router;
