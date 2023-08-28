import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Main from './src/screens/Main/Main';
import LoginScreen from './src/screens/Login/LoginScreen';

const App = () => {
  const [session, setSession] = useState(false);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} />
        {session ? <Main /> : <LoginScreen />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
