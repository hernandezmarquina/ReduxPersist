/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Styles from '../../styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getEmployeesAction} from '../../store/reducers/employeesReducer';
import CardView from '../../components/CardView/CardView';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '..';

const EmployeesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const employees = useAppSelector(state => state.employees.employees);

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, []);

  const onEmployeeSelected = (employee: any) => {
    navigation.navigate(SCREENS.EMPLOYEES_EVALUATION_NEW, {employee: employee});
  };

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.container}>
        {employees?.map(employee => (
          <CardView
            key={employee.id}
            id={employee.id}
            image={employee.image}
            title={`${employee.firstName} ${employee.lastName}`}
            subtitle={employee.company.title}
            onPress={() => onEmployeeSelected(employee)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default EmployeesScreen;
