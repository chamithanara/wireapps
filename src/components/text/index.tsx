import { FONT_SIZES } from '@app/constants/generic.constants';
import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface CustomTextProps extends TextProps {
    text: string;
    style?: TextStyle | TextStyle[];
    fontSize?: number;
    fontWeight?:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900'
        | undefined;
}

const CustomText: React.FC<CustomTextProps> = props => {
    const { text, style, fontSize = FONT_SIZES.Body, fontWeight = 'normal' } = props;

    return (
        <Text {...props} style={[style, { fontSize, fontWeight }]}>
            {text}
        </Text>
    );
};

export default CustomText;
