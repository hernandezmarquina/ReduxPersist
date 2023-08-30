import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Styles from '../../styles';
import {useAppDispatch} from '../../store/hooks';
import {loginAction} from '../../store/reducers/userReducer';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({username: '', password: ''});

  const onLoginPressed = () => {
    dispatch(loginAction(state));
  };
  return (
    <View style={Styles.centeredContainer}>
      <Text style={Styles.title}>Login</Text>
      <TextInput
        onChangeText={username => setState({...state, username})}
        placeholder="Usuario"
        style={Styles.input}
      />
      <TextInput
        onChangeText={password => setState({...state, password})}
        placeholder="Contraseña"
        style={Styles.input}
        keyboardType={'visible-password'}
      />
      <TouchableOpacity style={Styles.button} onPress={onLoginPressed}>
        <Text style={Styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
