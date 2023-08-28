import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EvaluationScreen from './EvaluationScreen';
import PendingEvaluationsScreen from './PendingEvaluationsScreen';
import {SCREENS} from '..';

const Stack = createNativeStackNavigator();

const EvaluationMain = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerBackTitleVisible: false,
      })}>
      <Stack.Screen
        name={SCREENS.PENDING_EVALUATIONS}
        component={PendingEvaluationsScreen}
      />
      <Stack.Screen
        name={SCREENS.EVALUATION_NEW}
        component={EvaluationScreen}
      />
    </Stack.Navigator>
  );
};

export default EvaluationMain;
