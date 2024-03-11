import React, { memo, useCallback } from 'react';
import { Image, ImageSourcePropType, StatusBar, TouchableOpacity, View } from 'react-native';

import Theme from '@src/themes';
import NavigationServices from '@app/navigation/NavigationServices';
import { SyncFunction } from '@app/constants/types/generic.types';
import { FONT_SIZES } from '@app/constants/generic.constants';
import { cartListCountSelector } from '@app/redux/secured.selector';
import { useReduxSelector } from '@app/store';
import Styles from './Styles';
import CustomText from '../text';

interface Props {
    renderLeftComponent?: boolean;
    renderCenterComponent?: boolean;
    renderRightComponent?: boolean;
    renderRightCountComponent?: boolean;
    rightButtonText?: string;
    centerText?: string;
    rightIcon?: ImageSourcePropType;
    leftIcon?: ImageSourcePropType;
    onLeftActionPress?: SyncFunction<void>;
    onRightActionPress?: SyncFunction<void>;
}

const AppHeader: React.FC<Props> = props => {
    const cartItemsCount = useReduxSelector(cartListCountSelector);

    const {
        renderLeftComponent = false,
        renderCenterComponent = false,
        renderRightComponent = false,
        renderRightCountComponent = false,
        rightButtonText = '',
        centerText = '',
        leftIcon = Theme.Images.icons.back,
        rightIcon = Theme.Images.icons.cart,
        onLeftActionPress = NavigationServices.goBack,
        onRightActionPress
    } = props;

    const leftView = useCallback(
        (): React.JSX.Element => (
            <TouchableOpacity
                onPress={onLeftActionPress}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                accessible={false}>
                <Image source={leftIcon} style={[Styles.leftImage]} />
            </TouchableOpacity>
        ),
        [leftIcon, onLeftActionPress]
    );

    const centerView = useCallback(
        () => (
            <CustomText
                text={centerText}
                style={Styles.titleText}
                fontSize={FONT_SIZES.Caption}
                fontWeight="bold"
            />
        ),
        [centerText]
    );

    const rightView = useCallback((): React.JSX.Element => {
        if (rightButtonText.length > 0) {
            return (
                <TouchableOpacity
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    onPress={onRightActionPress}>
                    <CustomText text={rightButtonText} style={Styles.rightText} />
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={onRightActionPress}>
                <Image source={rightIcon} style={[Styles.rightImage]} />
                {renderRightCountComponent && cartItemsCount > 0 ? (
                    <View style={Styles.rightCountContainer}>
                        <CustomText
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{ marginLeft: cartItemsCount.toString().length > 1 ? 2 : 5 }}
                            text={cartItemsCount.toString()}
                            fontSize={FONT_SIZES.BitTiny}
                            fontWeight="500"
                        />
                    </View>
                ) : null}
            </TouchableOpacity>
        );
    }, [cartItemsCount, onRightActionPress, renderRightCountComponent, rightButtonText, rightIcon]);

    return (
        <View style={[Styles.wrapper]}>
            <StatusBar translucent backgroundColor={Theme.Colors.TRANSPARENT} />

            <View style={Styles.primary}>
                {renderLeftComponent || renderRightComponent || renderCenterComponent ? (
                    <>
                        <View style={[Styles.subContainerSide, Styles.leftContainer]}>
                            {renderLeftComponent && leftView()}
                        </View>
                        <View style={Styles.centerItemWrapper}>
                            {renderCenterComponent && centerView()}
                        </View>
                        <View style={[Styles.subContainerSide, Styles.rightContainer]}>
                            {renderRightComponent && rightView()}
                        </View>
                    </>
                ) : null}
            </View>
        </View>
    );
};

export default memo(AppHeader);
