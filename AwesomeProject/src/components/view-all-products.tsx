import React, {useMemo, useCallback} from 'react';
import {useDataService} from '../hooks/use-service';
import ProductCard from './product-card';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';
interface ViewAllProductsProps<T, P> {
  service: (params?: P) => Promise<T>;
  params?: P;
  title?: string;
}

const ViewAllProducts: React.FC<ViewAllProductsProps<any, any>> = ({
  service,
  params,
  title,
}) => {
  const productsData = useDataService(service, params);
  const memoizedProductsData = useMemo(() => productsData, [productsData]);
  const handleEndReached = useCallback(() => {
    // Load more data here
  }, []);
  return(
<>
<Text style={styles.title}>{title}</Text>
<FlatList
        data={memoizedProductsData.data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => <ProductCard productId={item.id} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
  </>
  );
};

export default ViewAllProducts;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    }

})