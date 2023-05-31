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

const ProductCard: React.FC<{productId: string}> = ({productId}) => {
  const productData = useDataService(getProductByID, productId);
  const memoizedProductData = useMemo(() => productData, [productData]);
  if (memoizedProductData.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (memoizedProductData.error) {
    return <Text>Error</Text>;
  }
  const onPressViewProduct = () => {};
  return (
    <>
      <TouchableOpacity onPress={onPressViewProduct}>
      <View style={styles.productContainer}>
        <Text style={styles.title}>{memoizedProductData.data.title}</Text>
        <Image
          style={styles.productImage}
          resizeMode="contain"
          source={{
            uri: memoizedProductData.data && memoizedProductData.data.image,
          }}
        />
        <Text style={styles.detailsHeading}>Product Details</Text>
        <View>
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
          <View style={styles.textStyle}>
            <Text style={styles.boldText}>Category: </Text>
            <Text>{memoizedProductData.data.category}</Text>
          </View>
          <View style={styles.textStyle}>
            <Text style={styles.boldText}>Description: </Text>
            <Text style={styles.description}>
              {memoizedProductData.data.description}
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
