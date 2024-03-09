import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Theme from '@src/themes';
import { CustomText } from '@src/components';
import { FONT_SIZES } from '@app/constants/generic.constants';

interface Props {
    title: string;
    value: string;
}

const ProductDescriptionItem: React.FC<Props> = props => {
    const { title, value } = props;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemTitleContainer}>
                <CustomText
                    style={styles.itemTitle}
                    text={title}
                    fontSize={FONT_SIZES.Caption}
                    fontWeight="600"
                />
            </View>
            <View style={styles.itemDesContainer}>
                <View style={styles.itemDescription}>
                    <CustomText
                        style={styles.brand}
                        text={value}
                        fontSize={FONT_SIZES.Caption}
                        fontWeight="400"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 3
    },
    itemTitleContainer: {
        flex: 1,
        backgroundColor: Theme.Colors.Background.DESCRIPTION_TITLE
    },
    itemTitle: {
        paddingLeft: 10,
        textAlign: 'left',
        marginBottom: 12,
        marginTop: 12
    },
    itemDesContainer: {
        flex: 1,
        paddingLeft: 10,
        backgroundColor: Theme.Colors.Background.DESCRIPTION_VALUE
    },
    itemDescription: {
        verticalAlign: 'top',
        textAlign: 'center',
        alignContent: 'center'
    },
    brand: {
        marginBottom: 12,
        marginTop: 12
    }
});

export default memo(ProductDescriptionItem);
