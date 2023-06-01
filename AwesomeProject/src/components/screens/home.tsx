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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getProductsByCategory } from '../../services/get-categories';
import { getAllProducts } from '../../services/get-product-data';
import { useDataService } from '../../hooks/use-service';
import ProductsDisplay from '../products-display';
interface HomePageProps<T, P>{
        service?: (params?: P) => Promise<T>;
        params?: P;
        title?: string;
}
const Tab = createBottomTabNavigator();
const HomePage: React.FC<HomePageProps<any, any>> = ({service=getAllProducts, params, title}) => {
    const Data = useDataService(service, params);
    const memoizedData = useMemo(() => Data, [Data]);
    return(<>
    <View>
    <Text>Sana</Text>
    <Text>Sana</Text>
    <Text>{title}</Text>
    <Tab.Navigator>
        <Tab.Screen name="jewelery" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: "jewelery", title: "Jewelery" }} />
        <Tab.Screen name="electronics" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: "electronics", title: "Electronics" }} />
        <Tab.Screen name="men's clothing" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: "men's clothing", title: "Men's clothing" }} />
        <Tab.Screen name="women's clothing" component={ProductsDisplay} initialParams={{service: getProductsByCategory, params: "women's clothing", title: "Women's clothing" }} />
        <Tab.Screen name="all products" component={ProductsDisplay} initialParams={{service: getAllProducts, title: "Women's clothing" }} />
      </Tab.Navigator>
    </View>
    </>);
}

export default HomePage;