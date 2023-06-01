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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

interface HomePageProps<T, P>{
        service?: (params?: P) => Promise<T>;
        params?: P;
        title?: string;
}
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const HomePage: React.FC<HomePageProps<any, any>> = ({service=getAllProducts, params, title}) => {
    const Data = useDataService(service, params);
    const memoizedData = useMemo(() => Data, [Data]);
    return(<>
    <View>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="All products" component={ProductsDisplay} />
      </Drawer.Navigator>
    <Text>Sana</Text>
    <Text>Sana</Text>
    <Text>{title}</Text>
    
    </View>
    </>);
}

export default HomePage;