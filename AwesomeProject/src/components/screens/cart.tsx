import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {getCartByID} from '../../services/get-cart-data';
import {useDataService} from '../../hooks/use-service';
import CartCard from '../cart-card';

const Cart: React.FC<{cartId?: string}> = ({cartId=1}) => {
  console.log(cartId)
  const [totalPrice, setTotalPrice] = useState(0);
  const cartByIDQuery = useDataService(getCartByID, cartId);
  const handleSetTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };
  if (cartByIDQuery.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (cartByIDQuery.error) {
    return <Text>Error</Text>;
  }
  console.log(cartByIDQuery.data)
  return (
    <ScrollView>
      <Text>Cart</Text>
      <Text>{cartByIDQuery.data && cartByIDQuery.data.userId}</Text>
      <Text>{cartByIDQuery.data && cartByIDQuery.data.date}</Text>
      {cartByIDQuery.data &&
        cartByIDQuery.data.products.map((product: { productId: string; quantity: number; }) => (
          <CartCard
            key={product.productId}
            productId={product.productId}
            quantity={product.quantity}
            handleSetTotalPrice={handleSetTotalPrice}
          />
        ))}
      <Text style={styles.totalPrice}>Total: {totalPrice}</Text>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  totalPrice: {
    alignSelf: 'flex-end',
    padding: 10,
    fontWeight: 'bold',
  },
});
