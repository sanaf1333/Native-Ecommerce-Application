import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {getAllProducts} from 'services/product-service';
import ViewAllProductsContainer from 'containers/view-all-products';
interface productsDisplayProps<T, P> {
  service?: (params?: P) => Promise<T>;
  params?: P;
  title?: string;
}

const ProductsDisplay: React.FC<productsDisplayProps<any, any>> = ({
  service = getAllProducts,
  params,
  title,
}) => {
  const [order, setOrder] = useState('asc');
  const [key, setKey] = useState(0);
  const onPressAsc = () => {
    setOrder('asc');
    setKey(prevKey => prevKey + 1);
  };
  const onPressDesc = () => {
    setOrder('desc');
    setKey(prevKey => prevKey + 1);
  };
  return (
    <>
      <View style={styles.sortButtonContainer}>
        <Button
          onPress={onPressAsc}
          title="Sort Asc"
          color="#ace4ea"
          accessibilityLabel="Sort products in ascending"
        />
        <Button
          onPress={onPressDesc}
          title="Sort Desc"
          color="#ace4ea"
          accessibilityLabel="Sort products in descending"
        />
      </View>
      <View>
        <ViewAllProductsContainer
          key={key}
          service={service}
          params={params ? {category: params, order} : {order}}
          title={title}
        />
      </View>
    </>
  );
};

export default ProductsDisplay;

const styles = StyleSheet.create({
  sortButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    padding: 10,
  },
});
