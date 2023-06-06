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

import { getAllProducts } from '../services/get-product-data';
import { useDataService } from '../hooks/use-service';
import ViewAllProducts from './view-all-products';
interface HomePageProps<T, P>{
        service?: (params?: P) => Promise<T>;
        params?: P;
        title?: string;
}

const ProductsDisplay: React.FC<HomePageProps<any, any>> = ({service=getAllProducts, params, title}) => {
  const [order, setOrder]= useState('asc');
  const [fetchService, setFetchService]= useState(service);
    //const Data = useDataService(service, params);
    //const memoizedData = useMemo(() => Data, [Data]);
    //const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    console.log(params)
    console.log(service)
    const onPressAsc = () =>{
      setOrder('asc');
      //navigation.navigate('EditProduct', {productId: productId});
    }
    const onPressDesc = () =>{
      setOrder('desc')
      //navigation.navigate('EditProduct', {productId: productId});
    }
    return(<>
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
    <View>
    <Text>Sana</Text>
    <ViewAllProducts service={service} params={{params, order}} title={title} />
    </View>
    </>);
}

export default ProductsDisplay;