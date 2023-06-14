import React, {useMemo, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useDataService} from 'hooks/use-service';
import {getProductByID} from 'services/get-product-data';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
interface ProductCardProps {
  productId: string;
}
const ProductCard: React.FC<ProductCardProps> = ({productId}) => {
  const productData = useDataService(getProductByID, productId);
  const memoizedProductData = useMemo(() => productData, [productData]);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {width: windowWidth} = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState(
    windowWidth > 600 ? 400 : windowWidth - 20,
  );

  useEffect(() => {
    setContainerWidth(windowWidth > 600 ? 400 : windowWidth - 20);
  }, [windowWidth]);
  if (memoizedProductData.isLoading) {
    return null;
  }

  if (memoizedProductData.error) {
    return <Text>Error</Text>;
  }
  const onPressViewProduct = (productId: number) => {
    navigation.navigate('Product Details', {productId: productId});
  };
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity
        onPress={() => onPressViewProduct(memoizedProductData.data.id)}>
        <View style={[styles.productCardContainer, {width: containerWidth}]}>
          <FastImage
            style={styles.productImage}
            resizeMode={FastImage.resizeMode.contain}
            source={{
              uri: memoizedProductData.data && memoizedProductData.data.image,
              priority: FastImage.priority.normal,
            }}
          />
          <Text style={styles.title}>{memoizedProductData.data.title}</Text>
          <View style={styles.productDetails}>
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
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCardContainer: {
    padding: 10,
    borderColor: '#b1b5b2',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingBottom: 10,
  },
  detailsHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
