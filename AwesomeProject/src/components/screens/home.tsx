import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Image,
  ScrollView,
} from 'react-native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getProductsByCategory} from '../../services/get-categories';
import {getAllProducts} from '../../services/get-product-data';
import {useDataService} from '../../hooks/use-service';
import ProductsDisplay from '../products-display';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './signup';
import {getCartByID} from '../../services/get-cart-data';
import Cart from './cart';
import AddProductContainer from '../../containers/screens/add-product';

const WomensClothingScreen: React.FC = () => (
  <ProductsDisplay
    service={getProductsByCategory}
    params={`women's clothing`}
  />
);

const MensClothingScreen: React.FC = () => (
  <ProductsDisplay service={getProductsByCategory} params={`men's clothing`} />
);

const JeweleryScreen: React.FC = () => (
  <ProductsDisplay service={getProductsByCategory} params={`jewelery`} />
);

const ElectronicsScreen: React.FC = () => (
  <ProductsDisplay service={getProductsByCategory} params={`electronics`} />
);
const Drawer = createDrawerNavigator();
const HomePage: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="All products" component={ProductsDisplay} />
      <Drawer.Screen name="Jewellery" component={JeweleryScreen} />
      <Drawer.Screen name="Electronics" component={ElectronicsScreen} />
      <Drawer.Screen name="Men's Clothing" component={MensClothingScreen} />
      <Drawer.Screen name="Women's Clothing" component={WomensClothingScreen} />
      <Drawer.Screen name="Add products" component={AddProductContainer} />
    </Drawer.Navigator>
  );
};

export default HomePage;
