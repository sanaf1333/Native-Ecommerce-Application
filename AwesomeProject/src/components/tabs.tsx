import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getProductsByCategory } from '../services/get-categories';
import { getAllProducts } from '../services/get-product-data';

import HomePage from './screens/home';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Jewelry"
        component={HomePage}
        initialParams={{
          service: getProductsByCategory,
          params: "jewelry",
          title: "Jewelry",
        }}
        options={{
          tabBarLabel: 'Jewelry',
          // Specify the tabBarIcon if needed
        }}
      />
      <Tab.Screen
        name="Electronics"
        component={HomePage}
        initialParams={{
          service: getProductsByCategory,
          params: "electronics",
          title: "Electronics",
        }}
        options={{
          tabBarLabel: 'Electronics',
          // Specify the tabBarIcon if needed
        }}
      />
      {/* Add more Tab.Screen components for other tabs */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
