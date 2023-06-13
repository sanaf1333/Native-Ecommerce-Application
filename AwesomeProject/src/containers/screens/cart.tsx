import React, {useState} from 'react';
import {Text} from 'react-native';
import {getCartByID} from '@services/get-cart-data';
import {useDataService} from '@hooks/use-service';
import Cart from '@components/screens/cart';

const CartContainer: React.FC<{cartId?: string}> = ({cartId = 1}) => {
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
      <Cart
        cartByIDQuery={cartByIDQuery}
        calculateTotalPrice={calculateTotalPrice}
        handleSetTotalPrice={handleSetTotalPrice}
      />
  );
};

export default CartContainer;
