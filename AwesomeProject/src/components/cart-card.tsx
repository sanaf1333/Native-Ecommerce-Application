import React, {useEffect, useMemo} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'
import {useDataService} from 'hooks/use-service';
import {getProductByID} from 'services/get-product-data';
interface cartCardProps {
  productId: string;
  quantity: number;
  handleSetTotalPrice: (price: number) => void;
}
const CartCard: React.FC<cartCardProps> = ({productId, quantity, handleSetTotalPrice}) => {
  const productData = useDataService(getProductByID, productId);
  useEffect(() => {
    if (productData.data) {
      handleSetTotalPrice(productData.data.price * quantity);
    }
  }, [productData.data]);

  const memoizedProductData = useMemo(() => productData, [productData]);
  if (memoizedProductData.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (memoizedProductData.error) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <View style={styles.productContainer}>
        <FastImage
          style={{width: 100, height: 100}}
          source={{
            uri: memoizedProductData.data && memoizedProductData.data.image,
            priority: FastImage.priority.normal,
          }}
        />
        <View style={styles.productDescription}>
          <View style={styles.productTitle}>
            <Text>{memoizedProductData && memoizedProductData.data.title}</Text>
          </View>
          <View style={styles.productQuantity}>
            <Text style={styles.productPrice}>
              ${memoizedProductData && memoizedProductData.data.price}
            </Text>
            <Text>x{quantity}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    borderColor: '#73726e',
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  productTitle: {
    width: 150,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  productDescription: {
    flexDirection: 'column',
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  productQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontWeight: 'bold',
  },
});
