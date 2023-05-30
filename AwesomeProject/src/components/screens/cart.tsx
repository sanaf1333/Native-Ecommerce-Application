import React from "react";
import { productModal } from '../../modals/product-modal'
import { Text } from "react-native";
import { getCartByID } from "../../services/get-cart-data";
  import { useDataService } from "../../hooks/use-service";
  import CartCard from "../cart-card";
  const Cart: React.FC<{ cartId: string }> = ({ cartId }) => {
    const cartByIDQuery = useDataService(getCartByID, cartId);
    if (cartByIDQuery.isLoading ) {
        return <Text>Loading...</Text>;
      }
    
      if (cartByIDQuery.error ) {
        return <Text>Error</Text>;
      }
    return (
        <>
      <Text>{cartByIDQuery.data && cartByIDQuery.data.userId}</Text>
      <Text>{cartByIDQuery.data && cartByIDQuery.data.date}</Text>
      {cartByIDQuery.data &&
        cartByIDQuery.data.products.map((product) => (
          <CartCard
            key={product.productId}
            productId={product.productId}
            quantity={product.quantity}
          />
        ))}
    </>
    );
}
 
export default Cart;