import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from '../../routes';
import HomeScreen from '../../../screens/Home';

const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME_TAB} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeTab;
