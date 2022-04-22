import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Picker} from '@react-native-picker/picker';

import globalStyles from '../styles';

const Filtro = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Filtrar Gastos</Text>

      <Picker
        // style={styles.input}
        // selectedValue={categoria}
        // onValueChange={item => setCategoria(item)}
      >
        <Picker.Item label="-- Selecciona una categoria --" />
        <Picker.Item label="Ahorro" value="ahorro" />
        <Picker.Item label="Comida" value="comida" />
        <Picker.Item label="Casa" value="casa" />
        <Picker.Item label="Salud" value="salud" />
        <Picker.Item label="Ocio" value="ocio" />
        <Picker.Item label="Suscripciones" value="suscripciones" />
        <Picker.Item label="Gastos varios" value="gastos" />
      </Picker>
    </View>
  );
};

export default Filtro;

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    transform: [{translateY: 0}],
    marginTop: 80,
  },
  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748b',
  },
});
