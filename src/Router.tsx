import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useReduxDispatch } from '@app/store';
import NavigationHelpers from '@app/navigation/NavigationHelpers';
import { DeviceOrientationTypes } from '@app/constants/enums/generic.enums';
import Theme from './themes';
import appUtils from './utils/app.utils';

const Router = () => {
    const dispatch = useReduxDispatch();
    // appUtils.setDeviceOrientation(DeviceOrientationTypes.PORTRAIT);
    // appUtils.setDeviceOrientation(DeviceOrientationTypes['PORTRAIT-UPSIDEDOWN']);

    useEffect(() => {
        Theme.setTheme('light');
    }, []);

    const handleRouting = useCallback(() => {
        try {
            NavigationHelpers.navigateToHome();
        } catch (error) {
            // Handle error
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
