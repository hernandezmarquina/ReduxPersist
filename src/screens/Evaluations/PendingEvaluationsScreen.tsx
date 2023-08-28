import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SCREENS} from '..';

const PendingEvaluationsScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>Evaluaciones pendientes</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.EVALUATION_NEW);
        }}>
        <Text>Evaluar Empleado</Text>
      </TouchableOpacity>
    </>
  );
};

export default PendingEvaluationsScreen;
