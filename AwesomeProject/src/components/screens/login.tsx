import React, {useState} from 'react';
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
import {validatePassword} from '../../utils/password-validation';
import {validateEmptyField} from '../../utils/empty-field-validation';
import {showAlert} from '../../utils/show-alert';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { getAllProducts } from '../../services/get-product-data';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsPasswordValid(validatePassword(password));
    setIsUsernameValid(validateEmptyField(username));
    if (validatePassword(password) && validateEmptyField(username)) {
      showAlert('', 'pass');
      navigation.navigate('HomePage', { service: getAllProducts, title: "All Products" })
    } else {
      showAlert('', 'Invalid username or password!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
          <View style={styles.upperTriangle}>
            <Image
              style={styles.logo}
              source={require('../../../public/images/cintyre-logo.png')}
            />
          </View>
          <View style={styles.lowerTriangle} />
          <View style={styles.content}>
            <Text style={styles.text}>Login</Text>
            <TextInput
              style={[styles.input, !isUsernameValid && styles.errorInput]}
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
            />
            <TextInput
              style={[styles.input, !isPasswordValid && styles.errorInput]}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <Button title="Submit" onPress={onSubmit} />
            <Text style={styles.createAccountText}>
              New user? Create account!
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  upperTriangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: '#ace4ea',
    borderBottomRightRadius: 500,
  },
  lowerTriangle: {
    position: 'absolute',
    top: '60%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 500,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: '20%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: '60%',
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
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
  createAccountText: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Login;
