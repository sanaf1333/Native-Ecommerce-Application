
import React, {useState} from 'react';
import ProductDetails from 'components/screens/product-details';
import {getAllProducts} from 'services/product-service';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsDisplay from 'components/products-display';
import AddProductContainer from '../../src/screens/add-product';
import CartContainer from '../../src/screens/cart';
import EditProductContainer from '../../src/screens/edit-product';
import LoginContainer from '../../src/screens/login';
import SignupContainer from '../../src/screens/signup';
import VerifyPhoneContainer from '../../src/screens/verify-phone';
import TabNavigator from './tabs';
const Stack = createNativeStackNavigator();

function StackScreen(): JSX.Element {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const handleLogin = (loginStatus: boolean) => {
    setIsLoginSuccessful(loginStatus);
  };
  return (
      <NavigationContainer>
        
          {isLoginSuccessful ? (
            <>
            <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen
                name="HomePage"
                component={TabNavigator}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Product Details"
                component={ProductDetails}
                initialParams={{productId: 1}}
              />
              <Stack.Screen
                name="Cart"
                component={CartContainer}
                initialParams={{productId: '2'}}
              /> 
              <Stack.Screen
                name="ProductsDisplay"
                component={ProductsDisplay}
                initialParams={{service: getAllProducts, title: 'All products'}}
              />
              <Stack.Screen
                name="EditProduct"
                component={EditProductContainer}
              />
              <Stack.Screen name="AddProduct" component={AddProductContainer} />
              <Stack.Screen
                name="Verify Phone"
                component={VerifyPhoneContainer}
              />
              </Stack.Navigator>
            </>
          ) : (
            <>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={() => <LoginContainer onLogin={handleLogin} />}
              />
              <Stack.Screen name="Signup" component={SignupContainer} />
              </Stack.Navigator>
            </>
          )}
      </NavigationContainer>
  );
}

export default StackScreen;
