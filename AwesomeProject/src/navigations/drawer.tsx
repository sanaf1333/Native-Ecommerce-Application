import React, {useContext, useEffect} from 'react';
import {getProductsByCategory} from 'services/product-service';
import ProductsDisplay from '../components/products-display';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddProductContainer from 'screens/add-product';
import {AuthContext} from 'navigations/screen';

const WomensClothingScreen: React.FC = () => (
  <ProductsDisplay
    service={getProductsByCategory}
    params={`women's clothing`}
  />
);

const MensClothingScreen: React.FC = () => (
  <ProductsDisplay service={getProductsByCategory} params={`men's clothing`} />
);

const JeweleryScreen: React.FC = () => (
  <ProductsDisplay service={getProductsByCategory} params={`jewelery`} />
);

const ElectronicsScreen: React.FC = () => (
  <ProductsDisplay service={getProductsByCategory} params={`electronics`} />
);
const Logout: React.FC = () => {
  const {setLoginStatus} = useContext(AuthContext);
  useEffect(() => {
    setLoginStatus(false);
  }, []);
  return null;
};
const Drawer = createDrawerNavigator();
const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="All products" component={ProductsDisplay} />
      <Drawer.Screen name="Jewellery" component={JeweleryScreen} />
      <Drawer.Screen name="Electronics" component={ElectronicsScreen} />
      <Drawer.Screen name="Men's Clothing" component={MensClothingScreen} />
      <Drawer.Screen name="Women's Clothing" component={WomensClothingScreen} />
      <Drawer.Screen name="Add products" component={AddProductContainer} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
