import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Main from './src/screens/Main/Main';
import LoginScreen from './src/screens/Login/LoginScreen';
import {useAppSelector} from './src/store/hooks';

const App = () => {
  const user = useAppSelector(state => state.user);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} />
        {user?.token ? <Main /> : <LoginScreen />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
