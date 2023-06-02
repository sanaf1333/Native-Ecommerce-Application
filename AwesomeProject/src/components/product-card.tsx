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
import {useDataService} from '../hooks/use-service';
import {getProductByID} from '../services/get-product-data';
import {productModal} from '../modals/product-modal';
import { NavigationProp } from '@react-navigation/native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface ProductCardProps {
  productId: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ productId }) => {
  const productData = useDataService(getProductByID, productId);
  const memoizedProductData = useMemo(() => productData, [productData]);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  if (memoizedProductData.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (memoizedProductData.error) {
    return <Text>Error</Text>;
  }
  const onPressViewProduct = (productId: number) => {
    navigation.navigate('ProductDetails', { productId: productId });
  };
  return (
    <>
      <TouchableOpacity onPress={() => onPressViewProduct(memoizedProductData.data.id)}>
      <View style={styles.productCardContainer}>
        <Image
          style={styles.productImage}
          resizeMode="contain"
          source={{
            uri: memoizedProductData.data && memoizedProductData.data.image,
          }}
        />
        <Text style={styles.title}>{memoizedProductData.data.title}</Text>
        <View style={styles.productDetails}>
          <View style={styles.textStyle}>
            <Text style={styles.boldText}>Price: </Text>
            <Text>{memoizedProductData.data.price}</Text>
          </View>
          <View style={styles.textStyle}>
            <Text style={styles.boldText}>Rating: </Text>
            <Text>
              {memoizedProductData.data.rating.rate}/5 (
              {memoizedProductData.data.rating.count})
            </Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  
  productCardContainer: {
    padding: 10,
    borderColor: '#b1b5b2',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingBottom: 10,
  },
  detailsHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
