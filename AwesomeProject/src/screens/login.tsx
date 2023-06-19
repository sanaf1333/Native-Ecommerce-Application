import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {validatePassword} from 'utils/password-validation';
import {validateEmptyField} from 'utils/empty-field-validation';
import {showAlert} from 'utils/show-alert';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getAllProducts} from 'services/get-product-data';
import {userLogin} from 'services/get-user-data';
import Login from 'components/screens/login';
interface loginContainerModal{
  onLogin: (loginValue: boolean) => void;
}
const LoginContainer: React.FC<loginContainerModal> = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const onSubmit = async () => {
    setIsPasswordValid(validatePassword(password));
    setIsUsernameValid(validateEmptyField(username));
    if (validatePassword(password) && validateEmptyField(username)) {
      const isValidUser = await userLogin(username, password);
      if (isValidUser) {
        onLogin(true);
        navigation.navigate('HomePage', {
          service: getAllProducts,
          title: 'All Products',
        });
      } else {
        showAlert('', 'User not registered!');
        onLogin(false);
      }
    } else {
      showAlert('', 'Invalid username or password!');
      onLogin(false);
    }
  };
  const onPressCreateAccount = () => {
    navigation.navigate('Signup');
  };
  return (
    <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      dismissKeyboard={dismissKeyboard}
      onSubmit={onSubmit}
      onPressCreateAccount={onPressCreateAccount}
      isUsernameValid={isUsernameValid}
      isPasswordValid={isPasswordValid}
    />
  );
};

export default LoginContainer;
