/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import Login from './src/components/screens/login';
import Signup from './src/components/screens/signup';
import CartCard from './src/components/cart-card';
import Tryplease from './src/components/product-card';
import Cart from './src/components/screens/cart';
import ProductDetails from './src/components/screens/product-details';
import ProductCard from './src/components/product-card';
import ViewAllProducts from './src/components/view-all-products';
import { getAllProducts } from './src/services/get-product-data';
import { sortProductsAsc } from './src/services/get-product-data';
import { sortProductsDesc } from './src/services/get-product-data';
import { getProductsByCategory } from './src/services/get-categories';
import { NavigationContainer } from '@react-navigation/native';
const queryClient = new QueryClient();
function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Text>sana</Text>
        <ViewAllProducts service={getAllProducts} title="All Products" />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
