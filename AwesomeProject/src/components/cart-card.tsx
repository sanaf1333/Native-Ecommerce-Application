import React, { useEffect } from 'react';
import {productModal} from '../modals/product-modal';
import {Image, Text, View, StyleSheet} from 'react-native';
import {getCartByID} from '../services/get-cart-data';
import {useDataService} from '../hooks/use-service';
import {getProductByID} from '../services/get-product-data';
interface cartCardProps {
  productId: string;
  quantity: string;
}
const CartCard: React.FC<cartCardProps> = ({productId, quantity}) => {
  const productData = useDataService(getProductByID, productId);
  if (productData.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (productData.error) {
    return <Text>Error</Text>;
  }
  useEffect(() => {
    console.log("heh")
  }, []);

  return (
    <>
      <View style={styles.productContainer}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: productData.data && productData.data.image,
          }}
        />
        <View style={styles.productDescription}>
          <View style={styles.productTitle}>
            <Text>{productData && productData.data.title}</Text>
          </View>
          <View style={styles.productQuantity}>
          <Text style={styles.productPrice}>${productData && productData.data.price}</Text>
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
    justifyContent: 'space-between'
  },
  productQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  productPrice: {
    fontWeight: 'bold',
  }
});
