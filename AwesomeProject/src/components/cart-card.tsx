import React from "react";
import { productModal } from '../modals/product-modal'
import { Image, Text } from "react-native";
import { getCartByID } from "../services/get-cart-data";
  import { useDataService } from "../hooks/use-service";
  import { getProductByID } from "../services/get-product-data";
  interface cartCardProps{
    productId: string,
    quantity: string,
  }
const CartCard: React.FC<cartCardProps> = ({ productId, quantity }) => {
    const productData = useDataService(getProductByID, productId);
    if (productData.isLoading ) {
        return <Text>Loading...</Text>;
      }
    
      if (productData.error ) {
        return <Text>Error</Text>;
      }
    return (
        <>
      <Text>{quantity}</Text>
      <Text>{productData && productData.data.title}</Text>
      <Text>{productData && productData.data.price}</Text>
      <Image 
      style={{ width: 100, height: 100 }}
              source={{
                uri: productData.data && productData.data.image,
              }}
            />
      </>
    );
}
 
export default CartCard;