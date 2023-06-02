/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import Login from './src/components/screens/login';
import Signup from './src/components/screens/signup';
import CartCard from './src/components/cart-card';
import Tryplease from './src/components/product-card';
import Cart from './src/components/screens/cart';
import ProductDetails, {
  ProductDetailsProps,
} from './src/components/screens/product-details';
import ProductCard from './src/components/product-card';
import ViewAllProducts from './src/components/view-all-products';
import {getAllProducts} from './src/services/get-product-data';
import {sortProductsAsc} from './src/services/get-product-data';
import {sortProductsDesc} from './src/services/get-product-data';
import {getProductsByCategory} from './src/services/get-categories';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/components/screens/home';
import ProductsDisplay from './src/components/products-display';
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              initialParams={{productId: 1}}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              initialParams={{productId: '1'}}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              initialParams={{service: getAllProducts, title: "All products"}}
            />
            <Stack.Screen
              name="ProductsDisplay"
              component={ProductsDisplay}
              initialParams={{service: getAllProducts, title: "All products"}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
