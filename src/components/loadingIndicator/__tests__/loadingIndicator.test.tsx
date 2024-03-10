import React from 'react';
import { render, screen } from '@testing-library/react-native';
import LoadingIndicator from '..';

describe('LoadingIndicator', () => {
    test('matches the snapshot', () => {
        render(<LoadingIndicator />);
        expect(screen.toJSON()).toMatchSnapshot();
    });
});
