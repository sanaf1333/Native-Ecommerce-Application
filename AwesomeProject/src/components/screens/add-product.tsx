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
import { addNewProduct } from '../../services/add-update-product';
import ImagePicker, {ImageLibraryOptions, Asset, launchImageLibrary} from 'react-native-image-picker';

const AddProduct = () => {
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
  //const productData = useDataService(addNewProduct);
  
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  

  const onPressSubmit = () => {
    navigation.goBack();
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
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
            const selectedAsset: Asset = response.assets[0];
            const uri = selectedAsset.uri ? selectedAsset.uri : null;
            setSelectedImage(uri);
          }
      }
    );
  };
  return (
    <>
      <ScrollView>
        <Text style={styles.text}>Title</Text>
        <TextInput
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="Title"
          style={styles.inputBox}
        />
        <Text style={styles.text}>Price</Text>
        <TextInput
          onChangeText={handlePriceChange}
          value={price}
          placeholder="Price"
          style={styles.inputBox}
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
        <Text style={styles.text}>Image</Text>
        <View style={styles.imageButton}>
      <Button title="Select Image" onPress={handleImageSelect} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100 }} />}
    </View>
        <Text style={styles.text}>Description</Text>
        <TextInput
          onChangeText={description => setDescription(description)}
          value={description}
          multiline
          numberOfLines={6}
          placeholder="Description"
          style={styles.inputBox}
        />
        <View style={styles.submitButton}>
          <Button
            onPress={onPressSubmit}
            title="Add product"
            color="#ace4ea"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ ScrollView>
    </>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  imageButton: {
    alignItems: 'flex-start',
    margin: 10,
    width: '50%',
  },
  inputBox: {
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
