import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';

import FastImage from 'react-native-fast-image';
import CachedImage from '../index';

describe('Rendering Cached Image', () => {
    test('Snapshot of the initial render', async () => {
        render(<CachedImage uri="" />);
        await waitFor(() => expect(screen.toJSON()).toMatchSnapshot());
    });

    test('Snapshot with resizeMode contain prop', async () => {
        render(
            <CachedImage
                uri="https://unsplash.it/400/400?image=1"
                resizeMode={FastImage.resizeMode.contain}
                priority={FastImage.priority.normal}
            />
        );
        await waitFor(() => expect(screen.toJSON()).toMatchSnapshot());
    });

    test('Snapshot with resizeMode center prop', async () => {
        render(
            <CachedImage
                uri="https://unsplash.it/400/400?image=1"
                resizeMode={FastImage.resizeMode.center}
                priority={FastImage.priority.normal}
            />
        );
        await waitFor(() => expect(screen.toJSON()).toMatchSnapshot());
    });
});
