import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from '../../routes';
import ProfileScreen from '../../../screens/Profile';

const Stack = createStackNavigator();

const ProfileTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.PROFILE_TAB} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileTab;
