import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
