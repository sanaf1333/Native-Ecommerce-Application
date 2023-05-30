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
import {validateEmail} from '../../utils/email-validation';
import {validatePassword} from '../../utils/password-validation';
import {showAlert} from '../../utils/show-alert';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsEmailValid(validateEmail(email));
    setIsPasswordValid(validatePassword(password));
    console.log(isEmailValid);
    console.log(isPasswordValid);
    if (validateEmail(email) && validatePassword(password)) {
      showAlert('', 'pass');

      //create user object, pass to hook and add call service
    } else {
      showAlert('', 'Invalid email or password!');
    }
    //api call hook for service
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
            <Text style={styles.text}>Login</Text>
            <TextInput
              style={[styles.input, !isEmailValid && styles.errorInput]}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
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
              Not a user? Create account!
            </Text>
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
  scrollViewContent: {
    flexGrow: 1,
  },
  upperTriangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    backgroundColor: '#ace4ea',
    borderBottomRightRadius: 200,
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
    marginTop: '20%',
    marginLeft: '30%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: '10%',
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
    alignSelf: 'center',
    padding: 10,
  },
});

export default Login;
