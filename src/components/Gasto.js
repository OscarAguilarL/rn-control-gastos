import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

import globalStyles from '../styles';

const Gasto = ({gasto}) => {
  const {nombre, categoria, cantidad, id} = gasto;

  return (
    <View style={styles.contenedor}>
      <Text>{nombre}</Text>
    </View>
  );
};

export default Gasto;

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
});
