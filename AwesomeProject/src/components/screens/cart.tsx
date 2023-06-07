import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {getCartByID} from '../../services/get-cart-data';
import {useDataService} from '../../hooks/use-service';
import CartCard from '../cart-card';

const Cart: React.FC<{cartId?: string}> = ({cartId = 1}) => {
  const [totalPrices, setTotalPrices] = useState<number[]>([]);
  const cartByIDQuery = useDataService(getCartByID, cartId);
  const handleSetTotalPrice = (price: number) => {
    setTotalPrices(prevTotalPrices => [...prevTotalPrices, price]);
  };
  const calculateTotalPrice = (): number => {
    return totalPrices.reduce((acc, curr) => acc + curr, 0);
  };
  if (cartByIDQuery.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (cartByIDQuery.error) {
    return <Text>Error</Text>;
  }

  return (
    <ScrollView>
      <Text style={styles.text}>Happy shopping!</Text>
      {cartByIDQuery.data &&
        cartByIDQuery.data.products.map(
          (product: {productId: string; quantity: number}) => (
            <CartCard
              key={product.productId}
              productId={product.productId}
              quantity={product.quantity}
              handleSetTotalPrice={handleSetTotalPrice}
            />
          ),
        )}
      <Text style={styles.totalPrice}>Total: ${calculateTotalPrice()} </Text>
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
  text: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
  },
});
