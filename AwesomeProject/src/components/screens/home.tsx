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
import { getCartByID } from '../../services/get-cart-data';
import Cart from './cart';
import AddProduct from './add-product';
interface HomePageProps<T, P>{
        service?: (params?: P) => Promise<T>;
        params?: P;
        title?: string;
}

const Drawer = createDrawerNavigator();
const HomePage: React.FC<HomePageProps<any, any>> = ({service=getAllProducts, params, title}) => {
    const Data = useDataService(service, params);
    const memoizedData = useMemo(() => Data, [Data]);
    return(
    
    <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="All products" component={ProductsDisplay} />
        <Drawer.Screen name="Jewellery" component={() => <ProductsDisplay service={getProductsByCategory} params={'jewelery'} />} />
        <Drawer.Screen name="Electronics" component={() => <ProductsDisplay service={getProductsByCategory} params={'electronics'} />} />
        <Drawer.Screen name="Men's Clothing" 
        component={() => <ProductsDisplay service={getProductsByCategory} params={`men's clothing`} />} />
        <Drawer.Screen name="Women's Clothing" 
        component={() => <ProductsDisplay service={getProductsByCategory} params={`women's clothing`} />} />
        <Drawer.Screen name="Add products" component={AddProduct} />

      </Drawer.Navigator>
    
    );
}

export default HomePage;