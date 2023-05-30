import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { getCartByID } from "../services/get-cart-data";
  import { useDataService } from "../hooks/use-service";
const Tryplease = () => {
    const cartByIDQuery = useDataService(getCartByID, '5');
    if (cartByIDQuery.isLoading ) {
        return <Text>Loading...</Text>;
      }
    
      if (cartByIDQuery.error ) {
        return <Text>Error</Text>;
      }
    return (
        <>
      <Text>{cartByIDQuery && cartByIDQuery.data.userId}</Text>
      <Text>{cartByIDQuery && cartByIDQuery.data.date}</Text>
      <Text>{cartByIDQuery && cartByIDQuery.data.products[1].productId}</Text>
      </>
    );
  };

export default Tryplease;
