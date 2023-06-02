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
import { getProductsByCategory } from '../../services/get-categories';
import { getAllProducts } from '../../services/get-product-data';
import { useDataService } from '../../hooks/use-service';
import ProductsDisplay from '../products-display';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './signup';

interface HomePageProps<T, P>{
        service?: (params?: P) => Promise<T>;
        params?: P;
        title?: string;
}

const Drawer = createDrawerNavigator();
const HomePage: React.FC = () => {
    console.log("home rendered")
    return(
    
    <Drawer.Navigator initialRouteName="All products">
        <Drawer.Screen name="All products" component={ProductsDisplay} initialParams={{service: getAllProducts}} />
        <Drawer.Screen name="Jewlery" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: 'jewelery'}} />
        <Drawer.Screen name="electronics" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: 'electronics'}} />
        <Drawer.Screen name="Men's Clothing" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: `men's clothing`}} />
        <Drawer.Screen name="Women's Clothing" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: `women's clothing`}} />
        {/* <Drawer.Screen name="Jewelry" component={() => <ProductsDisplay service={getProductsByCategory} params={'jewelery'} title={'Jewellery'} />} />
        <Drawer.Screen name="Electronics" component={() => <ProductsDisplay service={getProductsByCategory} params={'electronics'} title={'Electronics'} />} />
        <Drawer.Screen name="Men's Clothing" 
        component={() => <ProductsDisplay service={getProductsByCategory} params={`men's clothing`} title={`men's clothing`} />} />
        <Drawer.Screen name="Women's Clothing" 
        component={() => <ProductsDisplay service={getProductsByCategory} params={`women's clothing`} title={`women's clothing`} />} /> */}
      </Drawer.Navigator>
    
    );
}

export default HomePage;