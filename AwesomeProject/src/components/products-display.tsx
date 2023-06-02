import React, {useMemo} from 'react';
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

import { getProductsByCategory } from '../services/get-categories';
import { getAllProducts } from '../services/get-product-data';
import { useDataService } from '../hooks/use-service';
import ViewAllProducts from './view-all-products';
interface HomePageProps<T, P>{
        service?: (params?: P) => Promise<T>;
        params?: P;
        title?: string;
}

const ProductsDisplay: React.FC<HomePageProps<any, any>> = ({service=getAllProducts, params, title}) => {
    //const Data = useDataService(service, params);
    //const memoizedData = useMemo(() => Data, [Data]);
    console.log(params)
    console.log(service)
    return(<>
    <View>
    <Text>Sana</Text>
    <ViewAllProducts service={service} params={params} title={title} />
    </View>
    </>);
}

export default ProductsDisplay;