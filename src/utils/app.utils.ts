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

const validateRegex = (regExp: RegExp, value: string): RegExpExecArray | null => {
    const regex = new RegExp(regExp);
    return regex.exec(value);
};

const concatStrings = (firstString: string, secondString: string, concatBy: string): string =>
    [firstString, secondString].join(concatBy);

export { getAppBuildNumber, validateRegex, concatStrings };

export default { setDeviceOrientation };
