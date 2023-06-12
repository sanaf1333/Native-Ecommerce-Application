import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDataService} from '../../hooks/use-service';
import {getProductByID} from '../../services/get-product-data';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import EditProduct from '../../components/screens/edit-product';
import {updateProduct} from '../../services/add-update-product';
import {showAlert} from '../../utils/show-alert';
import {validateEmptyField} from '../../utils/empty-field-validation';
type RootStackParamList = {
  EditProduct: {productId?: number};
};

const EditProductContainer: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'EditProduct'>>();
  const productId = route.params?.productId;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const items = [
    {label: 'Jewelery', value: 'jewelery'},
    {label: `men's clothing`, value: `men's clothing`},
    {label: `women's clothing`, value: `women's clothing`},
    {label: 'electronics', value: 'electronics'},
  ];
  const productData = useDataService(getProductByID, productId);
  const memoizedProductData = useMemo(() => productData, [productData]);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  useEffect(() => {
    setTitle(memoizedProductData.data.title);
    setPrice(memoizedProductData.data.price.toString());
    setDescription(memoizedProductData.data.description);
    setValue(memoizedProductData.data.category);
    setImage(memoizedProductData.data.image);
  }, []);

  const onPressSubmit = async () => {
    if (
      validateEmptyField(title) &&
      validateEmptyField(price) &&
      validateEmptyField(description) &&
      validateEmptyField(image)
    ) {
      const productUpdated = await updateProduct({
        id: productId,
        title: title,
        price: price,
        category: value,
        description: description,
        image: image,
      });
      if (productUpdated) {
        navigation.navigate('Product Details', {productId: productId});
      } else {
        showAlert('', 'Error updating product!');
      }
    } else {
      showAlert('', 'Please enter all details.');
    }
  };

  const handlePriceChange = (text: string) => {
    const numericValue = text.replace(/[^0-9.]/g, '');
    const parts = numericValue.split('.');
    let formattedValue = parts[0];
    if (parts.length > 1) {
      formattedValue += '.' + parts[1];
    }
    setPrice(formattedValue);
  };
  const renderDropdownItems = () => {
    return items.map(item => (
      <TouchableOpacity
        key={item.value}
        style={styles.dropdownItem}
        onPress={() => {
          setValue(item.value);
          setIsDropdownOpen(false);
        }}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <>
      <EditProduct
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        value={value}
        setValue={setValue}
        items={items}
        renderDropdownItems={renderDropdownItems}
        handlePriceChange={handlePriceChange}
        onPressSubmit={onPressSubmit}
        image={image}
        setImage={setImage}
      />
    </>
  );
};

export default EditProductContainer;

const styles = StyleSheet.create({
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
