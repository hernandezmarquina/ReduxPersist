import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    color: '#040D12',
    width: 300,
    marginVertical: 4,
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: '#183D3D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#040D12',
    marginVertical: 16,
  },
});

export default Styles;
