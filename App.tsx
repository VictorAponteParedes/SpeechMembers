import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TABS from './src/navigation/TabNavigator/TabList';
import Icon from 'react-native-vector-icons/Ionicons';
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
              tabBarIcon: ({color, size}) => (
                <Icon name={item.options.iconName} size={size} color={color} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
