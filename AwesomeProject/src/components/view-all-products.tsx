import React, {useMemo} from 'react';
import {useDataService} from '../hooks/use-service';
import ProductCard from './product-card';
import { ScrollView, Text, StyleSheet } from 'react-native';
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
  return(
<>
<Text style={styles.title}>{title}</Text>
  <ScrollView>
    {memoizedProductsData.data?.map((product: any) => (
        <ProductCard productId={product.id} />
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