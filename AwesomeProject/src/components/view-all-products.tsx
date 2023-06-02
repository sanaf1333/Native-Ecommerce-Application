import React, {useMemo} from 'react';
import {useDataService} from '../hooks/use-service';
import ProductCard from './product-card';
import { ScrollView, Text, StyleSheet } from 'react-native';
interface ViewAllProductsProps<T, P> {
  service: (params?: P) => Promise<T>;
  params?: P;
  title: string;
}

const ViewAllProducts: React.FC<ViewAllProductsProps<any, any>> = ({
  service,
  params,
  title,
}) => {
  console.log("view all products rendered")
  const productsData = useDataService(service, params);
  const memoizedData = useMemo(() => productsData, [productsData]);
  if (memoizedData.isLoading) {
    return (
      <Text style={styles.title}>loading</Text>
    );
  }

  if (memoizedData.isError) {
    return (
      <Text style={styles.title}>Error loading data</Text>
    );
  }
  return(
<>
<Text style={styles.title}>{title}</Text>
  <ScrollView>
    {memoizedData.data?.map((product: any) => (
        <ProductCard key={product.id} productId={product.id} />
      ))}
      </ScrollView>
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