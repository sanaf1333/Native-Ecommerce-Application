import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {getCartByID} from '../../services/get-cart-data';
import {useDataService} from '../../hooks/use-service';
import CartCard from '../cart-card';

const Cart: React.FC<{cartId: string}> = ({cartId}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartByIDQuery = useDataService(getCartByID, cartId);

  if (cartByIDQuery.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (cartByIDQuery.error) {
    return <Text>Error</Text>;
  }
  return (
    <>
      <Text>Cart</Text>
      <Text>{cartByIDQuery.data && cartByIDQuery.data.userId}</Text>
      <Text>{cartByIDQuery.data && cartByIDQuery.data.date}</Text>
      {cartByIDQuery.data &&
        cartByIDQuery.data.products.map(product => (
          <CartCard
            key={product.productId}
            productId={product.productId}
            quantity={product.quantity}
          />
        ))}
      <Text>Total: {totalPrice}</Text>
    </>
  );
};

export default Cart;
