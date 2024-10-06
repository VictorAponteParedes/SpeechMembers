import React from 'react';
import Routes from '../routes';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigation from './DraweNavigation';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  <Stack.Navigator initialRouteName={Routes.DRAWER_NAVIGATOR}>
    <Stack.Screen
      name={Routes.DRAWER_NAVIGATOR}
      component={DrawerNavigation}
      options={{headerShown: false}}
    />
  </Stack.Navigator>;
};

export default AuthNavigator;
