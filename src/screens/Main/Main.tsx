/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import EvaluationMain from '../Evaluations';
import EmployeesMain from '../Employees';
import {SCREENS} from '..';

const Tab = createBottomTabNavigator();

const Main = () => {
  const getIcon = (routeName: string) => {
    if (routeName === SCREENS.MAIN_EMPLOYEES) {
      return require('./group.png');
    } else {
      return require('./list_check.png');
    }
  };
  return (
    <Tab.Navigator
      screenOptions={props => ({
        unmountOnBlur: true,
        headerShown: false,
        tabBarIcon: () => <Image source={getIcon(props.route.name)} />,
      })}>
      <Tab.Screen name={SCREENS.MAIN_EMPLOYEES} component={EmployeesMain} />
      <Tab.Screen name={SCREENS.MAIN_EVALUATIONS} component={EvaluationMain} />
    </Tab.Navigator>
  );
};

export default Main;
