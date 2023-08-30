import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../../styles';
import {useAppDispatch} from '../../store/hooks';
import {sendEvaluationAction} from '../../store/reducers/evaluationReducers';
import {useNavigation} from '@react-navigation/native';

const EvaluationScreen = ({route}) => {
  const {employee} = route.params;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    individualPerformance: 0,
    competences: 0,
    experience: 0,
    responsibility: 0,
  });

  const _saveEvaluation = async () => {
    await dispatch(sendEvaluationAction({employee, evaluation: state}));
    navigation.goBack();
  };

  return (
    <View style={[Styles.container, styles.container]}>
      <Text
        style={
          styles.name
        }>{`${employee?.firstName} ${employee?.lastName} ${employee?.maidenName}`}</Text>
      <Text style={styles.companyTitle}>{`${employee?.company?.title}`}</Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.label]}>Desempeño individual</Text>
        <TextInput
          placeholder={'0'}
          style={[Styles.input, styles.input]}
          keyboardType={'numeric'}
          returnKeyType="done"
          onChangeText={text =>
            setState({...state, individualPerformance: parseInt(text, 10)})
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label]}>
          Competencias / Actitud comportamiento
        </Text>
        <TextInput
          placeholder={'0'}
          style={[Styles.input, styles.input]}
          keyboardType={'numeric'}
          returnKeyType="done"
          onChangeText={text =>
            setState({...state, competences: parseInt(text, 10)})
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label]}>Experiencia en el puesto</Text>
        <TextInput
          placeholder={'0'}
          style={[Styles.input, styles.input]}
          keyboardType={'numeric'}
          returnKeyType="done"
          onChangeText={text =>
            setState({...state, experience: parseInt(text, 10)})
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label]}>Responsabilidad</Text>
        <TextInput
          placeholder={'0'}
          style={[Styles.input, styles.input]}
          keyboardType={'numeric'}
          returnKeyType="done"
          onChangeText={text =>
            setState({...state, responsibility: parseInt(text, 10)})
          }
        />
      </View>
      <TouchableOpacity
        style={[Styles.button, styles.button]}
        onPress={_saveEvaluation}>
        <Text style={Styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 24,
  },
  input: {
    flex: 1,
  },
  label: {
    flex: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  container: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  companyTitle: {
    fontSize: 16,
  },
});

export default EvaluationScreen;
