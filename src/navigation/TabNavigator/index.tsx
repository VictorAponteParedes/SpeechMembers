import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import TABS from './TabList';

const BottomTab = createBottomTabNavigator();

// Define un tipo para las props
type TabBarNavigatorProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
};

const TabBarNavigator: React.FC<TabBarNavigatorProps> = ({
  navigation,
  route,
}) => {
  return (
    <BottomTab.Navigator>
      {TABS.map(item => (
        <BottomTab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            // icon: item.options.iconName,
            tabBarShowLabel: item.options.showLabel,
            title: item.options.title,
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default TabBarNavigator;
