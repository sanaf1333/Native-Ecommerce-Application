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
import {addNewProduct} from '../../services/add-update-product';
import ImagePicker, {
  ImageLibraryOptions,
  Asset,
  launchImageLibrary,
} from 'react-native-image-picker';

interface addProductModal{
  title: string;
  setTitle: (text: string) => void;
  price: string;
  setPrice:(text: string) => void;
  description: string;
  setDescription: (text: string) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  value: string;
  setValue: (text: string) => void;
  selectedImage: string | null;
  setSelectedImage: (text: string) => void;
  handleImageSelect: () => void;
  onPressSubmit: () => void;
  items: {label: string, value: string}[];
  handlePriceChange: (text: string) => void;
  renderDropdownItems: () => JSX.Element[];
}
const AddProduct: React.FC<addProductModal> = ({title, setTitle, price, setPrice, value, setValue, description, setDescription, isDropdownOpen, setIsDropdownOpen, selectedImage, setSelectedImage, handleImageSelect, handlePriceChange, onPressSubmit, renderDropdownItems, items}) => {

  return (
    <>
      <ScrollView>
      <Text style={styles.text}>Title</Text>
        <TextInput
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="Title"
          placeholderTextColor="gray"
          style={styles.inputBox}
        />
        <Text style={styles.text}>Price</Text>
        <TextInput
          onChangeText={handlePriceChange}
          value={price}
          placeholder="Price"
          placeholderTextColor="gray"
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
          {selectedImage && (
            <Image
              source={{uri: selectedImage}}
              style={{width: 100, height: 100, marginTop: 10}}
            />
          )}
        </View>
        <Text style={styles.text}>Description</Text>
        <TextInput
          onChangeText={description => setDescription(description)}
          value={description}
          multiline
          numberOfLines={6}
          placeholder="Description"
          placeholderTextColor="gray"
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
      </ScrollView>
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
    color: 'gray',
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
