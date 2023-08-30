import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICardViewProps} from './types';

const CardView = (props: ICardViewProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.avatar} src={props.image} />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardView;
