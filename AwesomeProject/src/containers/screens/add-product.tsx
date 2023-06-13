import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {showAlert} from '@utils/show-alert';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import AddProduct from '@components/screens/add-product';
import {validateEmptyField} from '@utils/empty-field-validation';
import { addNewProduct } from '@services/add-update-product';

const AddProductContainer: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
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

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onPressSubmit = async () => {
    if (
      validateEmptyField(title) &&
      validateEmptyField(price) &&
      validateEmptyField(description) &&
      validateEmptyField(
        selectedImage ? selectedImage : 'https://i.pravatar.cc',
      )
    ) {
      const productAdded = await addNewProduct({
        title: title,
        price: price,
        category: value,
        description: description,
        image: selectedImage ? selectedImage : 'https://i.pravatar.cc',
      });
      if (productAdded) {
        navigation.goBack();
      } else {
        showAlert('', 'Error adding product!');
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

  const handleImageSelect = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          showAlert('', 'User cancelled image picker');
        } else if (response.errorCode) {
          showAlert('Error selecting image', response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
          const selectedAsset: Asset = response.assets[0];
          const uri = selectedAsset.uri ? selectedAsset.uri : null;
          setSelectedImage(uri);
        }
      },
    );
  };
  return (
      <AddProduct
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
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        items={items}
        renderDropdownItems={renderDropdownItems}
        handleImageSelect={handleImageSelect}
        handlePriceChange={handlePriceChange}
        onPressSubmit={onPressSubmit}
      />
  );
};

export default AddProductContainer;

const styles = StyleSheet.create({
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
