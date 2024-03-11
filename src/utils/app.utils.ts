import Orientation from 'react-native-orientation-locker';
import type { OrientationType } from 'react-native-orientation-locker';
import { getBuildNumber } from 'react-native-device-info';

import { DeviceOrientationTypes } from '@app/constants/enums/generic.enums';

const setDeviceOrientation = (orientation: OrientationType): void => {
    if (orientation === DeviceOrientationTypes['LANDSCAPE-LEFT']) {
        Orientation.lockToLandscapeLeft();
    } else if (orientation === DeviceOrientationTypes['LANDSCAPE-RIGHT']) {
        Orientation.lockToLandscapeRight();
    } else if (
        orientation === DeviceOrientationTypes.PORTRAIT ||
        orientation === DeviceOrientationTypes['PORTRAIT-UPSIDEDOWN']
    ) {
        Orientation.lockToPortrait();
    } else {
        // Don't do anything
    }
};

const getAppBuildNumber = (): string => getBuildNumber();

export { getAppBuildNumber };

export default { setDeviceOrientation };
