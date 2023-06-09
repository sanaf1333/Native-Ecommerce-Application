import React, {useEffect, useMemo, useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useDataService} from '../../hooks/use-service';
import {getProductByID} from '../../services/get-product-data';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useRoute} from '@react-navigation/native';

type RootStackParamList = {
  EditProduct: {productId?: number};
};

const EditProduct: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'EditProduct'>>();
  const productId = route.params?.productId;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState('');
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
  }, []);

  const onPressSubmit = () => {
    navigation.navigate('Product Details', {productId: productId});
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
      <View>
        <Text style={styles.text}>Title</Text>
        <TextInput
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="Title"
          style={styles.button}
        />
        <Text style={styles.text}>Price</Text>
        <TextInput
          onChangeText={handlePriceChange}
          value={price}
          placeholder="Price"
          style={styles.button}
          keyboardType="numeric"
        />
        <View>
          <Text style={styles.text}>Category</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setIsDropdownOpen(true)}>
            <Text>{value ? value : 'Select a category'}</Text>
          </TouchableOpacity>
          <Modal visible={isDropdownOpen} animationType="slide">
            <View style={styles.dropdownContainer}>
              <ScrollView>{renderDropdownItems()}</ScrollView>
            </View>
          </Modal>
        </View>
        <Text style={styles.text}>Description</Text>
        <TextInput
          onChangeText={description => setDescription(description)}
          value={description}
          multiline
          numberOfLines={6}
          placeholder="Description"
          style={styles.button}
        />
        <View style={styles.submitButton}>
          <Button
            onPress={onPressSubmit}
            title="Submit Changes"
            color="#ace4ea"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </>
  );
};

export default EditProduct;

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  dropdownPlaceholder: {
    marginTop: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  dropdownButton: {
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  dropdownContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  buttonText: {
    color: '#ace4ea',
    fontWeight: 'bold',
  },
  submitButton: {
    padding: 10,
  },
});
