import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Routes from '../../routes';

import TabBarNavigator from '..';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName={Routes.TAB_BAR_NAVIGATOR}>
      <Drawer.Screen name={Routes.TAB_BAR_NAVIGATOR}>
        {props => <TabBarNavigator {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
