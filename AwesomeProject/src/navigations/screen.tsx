import React, {createContext, useContext, useState} from 'react';
import ProductDetails from 'components/screens/product-details';
import {getAllProducts} from 'services/product-service';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsDisplay from 'components/products-display';
import AddProductContainer from 'screens/add-product';
import CartContainer from 'screens/cart';
import EditProductContainer from 'screens/edit-product';
import LoginContainer from 'screens/login';
import SignupContainer from 'screens/signup';
import VerifyPhoneContainer from 'screens/verify-phone';
import TabNavigator from './tabs';
const Stack = createNativeStackNavigator();
export const AuthContext = createContext<{
  isLoginSuccessful: boolean;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isLoginSuccessful: false,
  setLoginStatus: () => {},
});
function StackScreen(): JSX.Element {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const setLoginStatus: React.Dispatch<
    React.SetStateAction<boolean>
  > = status => {
    setIsLoginSuccessful(status);
  };

  return (
    <AuthContext.Provider value={{isLoginSuccessful, setLoginStatus}}>
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
              <Stack.Screen name="Login" component={LoginContainer} />
              <Stack.Screen name="Signup" component={SignupContainer} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default StackScreen;
