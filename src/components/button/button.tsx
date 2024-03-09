import React, { memo, useCallback, useMemo } from 'react';
import { View, StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { FONT_SIZES } from '@app/constants/generic.constants';
import styles from './button.styles';
import CustomText from '../text';

export type ButtonType = 'secondary' | 'textOnly' | 'primary' | 'primaryInvertedWithBorder';

export interface Props {
    title?: string;
    type?: ButtonType;
    onPress: (() => void) | (() => Promise<void>);
    buttonStyle?: StyleProp<ViewStyle>;
    disabledStyles?: StyleProp<TextStyle>;
    isDisabled?: boolean;
}

const Button: React.FC<Props> = props => {
    const { title = '', onPress, buttonStyle, type, isDisabled, disabledStyles } = props;

    const getButtonStyles = useCallback(() => {
        let additionalBtnStyle: StyleProp<ViewStyle> = null;
        let additionalTxtStyle: StyleProp<TextStyle> = null;
        if (isDisabled) {
            additionalBtnStyle = [styles.disabledButton, disabledStyles];
            additionalTxtStyle = styles.disabledText;
        } else {
            switch (type) {
                case 'secondary':
                    additionalBtnStyle = styles.secondaryButton;
                    additionalTxtStyle = styles.secondaryText;
                    break;
                case 'textOnly':
                    additionalBtnStyle = styles.textButton;
                    additionalTxtStyle = styles.textButtonText;
                    break;
                case 'primaryInvertedWithBorder':
                    additionalBtnStyle = styles.primaryInvertedButtonWithBorder;
                    additionalTxtStyle = styles.primaryInvertedButtonText;
                    break;
                default:
                    additionalBtnStyle = {};
                    additionalTxtStyle = {};
                    break;
            }
        }

        return { additionalBtnStyle, additionalTxtStyle };
    }, [disabledStyles, isDisabled, type]);

    const { additionalBtnStyle, additionalTxtStyle } = getButtonStyles();

    const renderButtonContent = useCallback(
        (): React.JSX.Element => (
            <View style={styles.buttonStyle}>
                <CustomText
                    style={[styles.buttonText, additionalTxtStyle]}
                    text={title}
                    fontWeight="bold"
                    fontSize={FONT_SIZES.SmallTitle}
                />
            </View>
        ),
        [additionalTxtStyle, title]
    );

    const onPressHandler = useCallback(() => {
        if (onPress) {
            onPress();
        }
    }, [onPress]);

    const styleSelector = useMemo(
        (): StyleProp<ViewStyle>[] => [styles.button, additionalBtnStyle, buttonStyle],
        [additionalBtnStyle, buttonStyle]
    );

    return (
        <TouchableOpacity
            accessible
            style={styleSelector}
            onPress={onPressHandler}
            disabled={isDisabled}>
            {renderButtonContent()}
        </TouchableOpacity>
    );
};

export default memo(Button);
