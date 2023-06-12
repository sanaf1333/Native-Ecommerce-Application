import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import { signupModal } from '../../modals/signup-modal';

const Signup: React.FC<signupModal> = ({dismissKeyboard, email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName, phone, setPhone, city, setCity, street, setStreet, zipcode, setZipcode, house, setHouse, username, setUsername, onSubmit}) => {
  
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <View style={styles.upperTriangle}>
            <Image
              style={styles.logo}
              source={require('../../../public/images/cintyre-logo.png')}
            />
          </View>
          <View style={styles.lowerTriangle} />
          <View style={styles.content}>
            <Text style={styles.text}>Signup</Text>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.firstBoxInput
                ]}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
              />
              <TextInput
                style={[
                  styles.input,
                  styles.firstBoxInput
                ]}
                placeholder="Password"
                placeholderTextColor="gray"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First Name"
                placeholderTextColor="gray"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setUsername}
                value={username}
                placeholder="Username"
                placeholderTextColor="gray"
              />
              <TextInput
                style={[
                  styles.input,
                  styles.lastBoxInput
                ]}
                onChangeText={setPhone}
                value={phone}
                placeholder="Phone"
                placeholderTextColor="gray"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setCity}
                value={city}
                placeholder="City"
                placeholderTextColor="gray"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setStreet}
                value={street}
                placeholder="Street"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setHouse}
                value={house}
                placeholder="House no."
                placeholderTextColor="gray"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setZipcode}
                value={zipcode}
                placeholder="Zipcode"
                placeholderTextColor="gray"
                keyboardType="numeric"
              />
            </View>

            <Button title="Submit" onPress={onSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperTriangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    backgroundColor: '#ace4ea',
    borderBottomRightRadius: 500,
  },
  lowerTriangle: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 500,
  },
  logo: {
    width: 150,
    height: 150,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginLeft: '30%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: '40%',
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
  TextBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstBoxInput: {
    flex: 1,
    marginRight: 4,
  },
  lastBoxInput: {
    flex: 1,
    marginLeft: 4,
  },
});

export default Signup;
