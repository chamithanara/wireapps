import React, { memo, useCallback, useEffect, useState } from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleProp,
    StyleSheet,
    ImageStyle as RNImageStyle
} from 'react-native';
import Theme from '@src/themes';
import FastImage, { ResizeMode, ImageStyle, Priority } from 'react-native-fast-image';

import LoadingIndicator from '../loadingIndicator';

interface Props {
    uri: string;
    defaultImage?: ImageSourcePropType;
    customStyles?: StyleProp<ImageStyle & RNImageStyle>;
    priority?: Priority;
    resizeMode?: ResizeMode;
    showDefaultImage?: boolean;
    showLoading?: boolean;
}

const CachedImage: React.FC<Props> = props => {
    const {
        uri,
        defaultImage = Theme.Images.logo.wireApps,
        customStyles = {},
        resizeMode = FastImage.resizeMode.cover,
        priority = FastImage.priority.normal,
        showDefaultImage = true,
        showLoading = true
    } = props;
    const [renderFastImage, setRenderFastImage] = useState<boolean>(uri.length !== 0);
    const [isImageLoading, setIsImageLoading] = useState<boolean>(renderFastImage);

    useEffect(() => {
        const isValidUri = uri.length !== 0;
        if (isValidUri) {
            if (!renderFastImage) {
                setRenderFastImage(true);
                setIsImageLoading(true);
            }
        } else {
            setRenderFastImage(false);
            setIsImageLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uri]);

    const manageImageLoadingStart = useCallback(() => {
        setIsImageLoading(true);
    }, []);

    const manageImageLoadingEnd = useCallback(() => {
        setIsImageLoading(false);
    }, []);

    const manageImageError = useCallback(() => {
        setRenderFastImage(false);
        setIsImageLoading(false);
    }, []);

    return (
        <>
            {isImageLoading && showLoading ? <LoadingIndicator /> : null}
            {renderFastImage ? (
                <FastImage
                    style={[styles.fastImage, customStyles]}
                    source={{
                        uri,
                        priority
                    }}
                    resizeMode={resizeMode}
                    onLoadStart={manageImageLoadingStart}
                    onLoadEnd={manageImageLoadingEnd}
                    onError={manageImageError}
                />
            ) : (
                showDefaultImage && (
                    <Image source={defaultImage} style={[customStyles, { resizeMode }]} />
                )
            )}
        </>
    );
};

const styles = StyleSheet.create({
    fastImage: {
        zIndex: -1
    }
});

export default memo(CachedImage);
