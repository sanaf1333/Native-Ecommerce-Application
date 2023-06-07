import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Image,
  ScrollView,
} from 'react-native';

import {getAllProducts} from '../services/get-product-data';
import ViewAllProducts from './view-all-products';
interface HomePageProps<T, P> {
  service?: (params?: P) => Promise<T>;
  params?: P;
  title?: string;
}

const ProductsDisplay: React.FC<HomePageProps<any, any>> = ({
  service = getAllProducts,
  params,
  title,
}) => {
  const [order, setOrder] = useState('asc');
  const onPressAsc = () => {
    setOrder('asc');
  };
  const onPressDesc = () => {
    setOrder('desc');
  };
  return (
    <>
      <View style={styles.sortButtonContainer}>
        <Button
          onPress={onPressAsc}
          title="Sort Asc"
          color="#ace4ea"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressDesc}
          title="Sort Desc"
          color="#ace4ea"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View>
        <ViewAllProducts
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
  },
});
