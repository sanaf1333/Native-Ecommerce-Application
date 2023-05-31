import React, {useMemo} from 'react';
import {useDataService} from '../hooks/use-service';
import ProductCard from './product-card';
import { ScrollView } from 'react-native';
interface ViewAllProductsProps<T, P> {
  service: (params?: P) => Promise<T>;
  params?: P;
}

const ViewAllProducts: React.FC<ViewAllProductsProps<any, any>> = ({
  service,
  params,
}) => {
  const productsData = useDataService(service, params);

  return(
<>
  <ScrollView>
    {productsData.data?.map((product: any) => (
        <ProductCard productId={product.id} />
      ))}
      </ScrollView>
  </>
  );
};

export default ViewAllProducts;
