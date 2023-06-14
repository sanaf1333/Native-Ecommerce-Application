import React, {useMemo} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import {useDataService} from 'hooks/use-service';
import {getProductByID} from 'services/get-product-data';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
type RootStackParamList = {
  ProductDetails: {productId?: number};
};

export interface ProductDetailsProps {
  productId?: number;
}

const ProductDetails: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();
  const productId = route.params?.productId;
  const productData = useDataService(getProductByID, productId);
  const memoizedProductData = useMemo(() => productData, [productData]);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  if (memoizedProductData.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (memoizedProductData.error) {
    return <Text>Error</Text>;
  }

  const onPressEdit = () => {
    navigation.navigate('EditProduct', {productId: productId});
  };
  return (
    <ScrollView style={styles.productContainer}>
      <Text style={styles.title}>{memoizedProductData.data.title}</Text>
      <FastImage
        style={styles.productImage}
        resizeMode={FastImage.resizeMode.contain}
        source={{
          uri: memoizedProductData.data && memoizedProductData.data.image,
          priority: FastImage.priority.normal,
        }}
      />
      <Text style={styles.detailsHeading}>Product Details</Text>
      <View>
        <View style={styles.textStyle}>
          <Text style={styles.boldText}>Price: </Text>
          <Text>{memoizedProductData.data.price}</Text>
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.boldText}>Rating: </Text>
          <Text>
            {memoizedProductData.data.rating.rate}/5 (
            {memoizedProductData.data.rating.count})
          </Text>
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.boldText}>Category: </Text>
          <Text>{memoizedProductData.data.category}</Text>
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.boldText}>Description: </Text>
          <Text style={styles.description}>
            {memoizedProductData.data.description}
          </Text>
        </View>
      </View>
      <View style={styles.editButton}>
        <Button
          onPress={onPressEdit}
          title="Edit"
          color="#ace4ea"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    width: '30%',
  },
  buttonText: {
    color: '#ace4ea',
    fontWeight: 'bold',
  },
  editButton: {
    marginBottom: 20,
  },
  productContainer: {
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'flex-start',
    paddingBottom: 20,
  },
  detailsHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  productDetails: {
    paddingBottom: 20,
  },
  priceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    width: '80%',
    paddingRight: 10,
    textAlign: 'justify',
  },
});
