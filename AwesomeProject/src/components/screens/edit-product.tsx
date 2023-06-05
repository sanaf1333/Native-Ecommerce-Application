import React, {useEffect, useMemo} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDataService} from '../../hooks/use-service';
import {getProductByID} from '../../services/get-product-data';
import {productModal} from '../../modals/product-modal';
import { NavigationProp } from '@react-navigation/native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';

// Define the type for route params
type RootStackParamList = {
  ProductDetails: { productId?: number };
};
// Inside the ProductDetails component

interface EditProductProps {
    productId: string;
  }

const EditProduct: React.FC<EditProductProps> = ({ productId }) => {
  //const route = useRoute<RouteProp<RootStackParamList, 'EditProduct'>>();
 // const productId = route.params?.productId;
  const productData = useDataService(getProductByID, productId);
  const memoizedProductData = useMemo(() => productData, [productData]);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
 
 
  const onPressSubmit = () =>{
    navigation.navigate('EditProduct');
  }
  return (
    <>
      
    </>
  );
};

export default EditProduct;

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    width: '30%'
  },
  buttonText: {
    color: '#ace4ea',
    fontWeight: 'bold',
  },
  productContainer: {
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  detailsHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  productDetails: {
    paddingBottom: 20,
  },
  priceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    width: '80%',
    paddingRight: 10,
    textAlign: 'justify',
  },
});
