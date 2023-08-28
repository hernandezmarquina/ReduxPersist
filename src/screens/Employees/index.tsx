import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeesScreen from './EmployessScreen';
import EvaluationScreen from '../Evaluations/EvaluationScreen';
import {SCREENS} from '..';

const Stack = createNativeStackNavigator();

const EmployeesMain = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerBackTitleVisible: false,
        title: 'Empleados',
      })}>
      <Stack.Screen name={SCREENS.EMPLOYEES} component={EmployeesScreen} />
      <Stack.Screen
        name={SCREENS.EMPLOYEES_EVALUATION_NEW}
        component={EvaluationScreen}
      />
    </Stack.Navigator>
  );
};

export default EmployeesMain;
