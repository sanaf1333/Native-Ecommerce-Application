import React from 'react';
import {Image} from 'react-native';
import DrawerNavigation from './drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartContainer from 'screens/cart';

const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../public/images/icons8-home-24.png')}
              style={{tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartContainer}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../public/images/icons8-cart-24.png')}
              style={{tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
