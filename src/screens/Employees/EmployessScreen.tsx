/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Styles from '../../styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getEmployeesAction} from '../../store/reducers/employeesReducer';
import CardView from '../../components/CardView/CardView';

const EmployeesScreen = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(state => state.employees.employees);

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, []);

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.container}>
        {employees?.map(employee => (
          <CardView
            id={employee.id}
            image={employee.image}
            title={`${employee.firstName} ${employee.lastName}`}
            subtitle={employee.company.title}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default EmployeesScreen;
