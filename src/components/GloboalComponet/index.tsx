import React from 'react';
import {StatusBar} from 'react-native';

import AppNavigator from '../../navigation/TabNavigator/AppNavigator';

const GlobalComponent = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="transparent" />
    <AppNavigator />
  </>
);

export default GlobalComponent;
