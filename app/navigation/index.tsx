import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavigationStack from './NavigationStack';
import NavServices from './NavigationServices';

const AppNavigator: React.FC = () => (
    <NavigationContainer ref={NavServices.navigationRef}>
        <NavigationStack />
    </NavigationContainer>
);

export default AppNavigator;
