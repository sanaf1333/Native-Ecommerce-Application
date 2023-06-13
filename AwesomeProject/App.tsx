import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { config } from 'dotenv';
import { Image } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from './src/components/screens/product-details';
import { getAllProducts } from './src/services/get-product-data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/components/screens/home';
import ProductsDisplay from './src/components/products-display';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import AddProductContainer from './src/containers/screens/add-product';
import CartContainer from './src/containers/screens/cart';
import EditProductContainer from './src/containers/screens/edit-product';
import LoginContainer from './src/containers/screens/login';
import SignupContainer from './src/containers/screens/signup';
import VerifyPhoneContainer from './src/containers/verify-phone';
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
config();
function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginContainer} />
          <Stack.Screen name="Signup" component={SignupContainer} />
          <Stack.Screen
            name="Product Details"
            component={ProductDetails}
            initialParams={{ productId: 1 }}
          />
          <Stack.Screen
            name="Cart"
            component={CartContainer}
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
            component={EditProductContainer}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProductContainer}
          />
          <Stack.Screen
          name="Verify Phone"
          component={VerifyPhoneContainer}
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
      <Tab.Screen name="Cart" component={CartContainer} options={{
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

export default App;
