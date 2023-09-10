import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useAppSelector} from '../../store/hooks';
import CardView from '../../components/CardView/CardView';
import {SCREENS} from '..';

const PendingEvaluationsScreen = () => {
  const navigation = useNavigation();
  const selector = useAppSelector(state => state.evaluation);

  useEffect(() => {
    console.log('PendingEvaluationsScreen', selector);
  }, [selector]);

  const onEvaluationSelected = (evaluation: any) => {
    navigation.navigate(SCREENS.EVALUATION_NEW, {
      employee: evaluation.employee,
    });
  };
  return (
    <>
      {selector?.pendingEvaluations?.map(evaluation => (
        <CardView
          key={evaluation.employee.id}
          id={evaluation.employee.id}
          image={evaluation.employee.image}
          title={`Evaluación Pendiente\n${evaluation.employee.firstName} ${evaluation.employee.lastName}`}
          subtitle={evaluation.employee.company.title}
          onPress={() => onEvaluationSelected(evaluation)}
        />
      ))}
    </>
  );
};

export default PendingEvaluationsScreen;
