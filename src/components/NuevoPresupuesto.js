import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles';

const NuevoPresupuesto = ({
  handleNuevoPresupuesto,
  presupuesto,
  setPresupuesto,
}) => {
  useEffect(() => {
    const obtenerAS = async () => {
      const value = await AsyncStorage.getItem('pruebaAS');
      console.log(value);
    };
    obtenerAS();
  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Define tu presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Ej. 5200"
        style={styles.input}
        value={presupuesto.toString()}
        onChangeText={setPresupuesto}
      />

      <Pressable
        style={styles.boton}
        onPress={() => handleNuevoPresupuesto(presupuesto)}>
        <Text style={styles.botonTexto}>Agregar Presupusto</Text>
      </Pressable>
    </View>
  );
};

export default NuevoPresupuesto;

const styles = StyleSheet.create({
  contenedor: {...globalStyles.contenedor},
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3b82f6',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    paddingStart: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  boton: {
    marginTop: 30,
    backgroundColor: '#1048a4',
    padding: 10,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
