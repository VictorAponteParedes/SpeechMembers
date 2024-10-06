import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TABS from './src/navigation/TabNavigator/TabList';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {TABS.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              title: item.options.title,
              tabBarShowLabel: item.options.showLabel,
              headerShown: item.options.headerShown ?? true,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
