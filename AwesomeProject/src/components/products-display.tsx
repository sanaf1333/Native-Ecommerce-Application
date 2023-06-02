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
import { getProductsByCategory } from '../services/get-categories';
import { getAllProducts } from '../services/get-product-data';
import { useDataService } from '../hooks/use-service';
import ViewAllProducts from './view-all-products';
interface HomePageProps<T, P>{
        service?: (params?: P) => Promise<T>;
        params?: P;
        title?: string;
}

const ProductsDisplay: React.FC<HomePageProps<any, any>> = ({service=getAllProducts, params, title}) => {
    console.log("products dsiplay rendered")
  console.log("home", service)
  console.log("home", params)
  console.log("home", title)
    return(<>
    <View>
    <ViewAllProducts service={service} params={params} title={title? title: ''}/>
    </View>
    </>);
}

export default ProductsDisplay;