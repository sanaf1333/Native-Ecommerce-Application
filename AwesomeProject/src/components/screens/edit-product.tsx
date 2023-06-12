import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {editProductModal} from '../../modals/edit-product-modal';

const EditProduct: React.FC<editProductModal> = ({
  title,
  setTitle,
  price,
  description,
  setDescription,
  isDropdownOpen,
  setIsDropdownOpen,
  value,
  onPressSubmit,
  handlePriceChange,
  renderDropdownItems,
  image,
  setImage,
}) => {
  return (
    <View>
      <Text style={styles.text}>Title</Text>
      <TextInput
        onChangeText={text => setTitle(text)}
        value={title}
        placeholder="Title"
        placeholderTextColor="gray"
        style={styles.button}
      />
      <Text style={styles.text}>Price</Text>
      <TextInput
        onChangeText={handlePriceChange}
        value={price}
        placeholder="Price"
        placeholderTextColor="gray"
        style={styles.button}
        keyboardType="numeric"
      />
      <Text style={styles.text}>Image Link: </Text>
      <TextInput
        onChangeText={setImage}
        value={image}
        placeholder="https://i.pravatar.cc"
        placeholderTextColor="gray"
        style={styles.button}
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
        placeholderTextColor="gray"
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
