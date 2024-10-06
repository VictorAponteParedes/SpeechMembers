import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../../routes';

import MemberScreen from '../../../screens/Members';

const Stack = createStackNavigator();

const MemberTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.MEMBERS_TAB} component={MemberScreen} />
    </Stack.Navigator>
  );
};

export default MemberTabs;
