import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/components/screens/home';
import ProductsDisplay from './src/components/products-display';
import EditProduct from './src/components/screens/edit-product';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import AddProduct from './src/components/screens/add-product';
import PhoneNumberVerification from './src/components/screens/phone-number';
import OTPVerification from './src/components/screens/otp';
import PhoneSignIn from './src/components/verify-phone';
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="Product Details"
            component={ProductDetails}
            initialParams={{ productId: 1 }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            initialParams={{ productId: '2' }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomeTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductsDisplay"
            component={ProductsDisplay}
            initialParams={{ service: getAllProducts, title: "All products" }}
          />
          <Stack.Screen
            name="EditProduct"
            component={EditProduct}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
          />
          <Stack.Screen
          name="PhoneNumberVerification"
          component={PhoneNumberVerification}
          />
          <Stack.Screen
          name="OTP"
          component={OTPVerification}
          />
          <Stack.Screen
          name="PhoneSignIn"
          component={PhoneSignIn}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

function HomeTabNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./public/images/icons8-home-24.png')}
              style={{ tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen name="Cart" component={Cart} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./public/images/icons8-cart-24.png')}
              style={{ tintColor: color }}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
