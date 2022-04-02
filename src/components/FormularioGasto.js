import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import globalStyles from '../styles/';

const FormularioGasto = ({setModal, handleNuevoGasto, setGasto}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Motivo del gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Añade el motivo del gasto, Ej. Comida"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Monto:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. 250"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Categoria:</Text>
          <Picker
            style={styles.input}
            selectedValue={categoria}
            onValueChange={item => setCategoria(item)}>
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

        <Pressable
          style={styles.submitBtn}
          onPress={() => handleNuevoGasto({nombre, cantidad, categoria})}>
          <Text style={styles.btnTexto}>Agregar gasto</Text>
        </Pressable>

        <Pressable
          style={styles.btnCancelar}
          onLongPress={() => {
            setModal(false);
            setGasto({})
          }}>
          <Text style={styles.btnTexto}>Cancelar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default FormularioGasto;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#1e40af',
    flex: 1,
  },
  formulario: {...globalStyles.contenedor},
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#64748b',
  },
  campo: {
    marginVertical: 10,
  },
  label: {
    color: '#64748b',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#3b82f6',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  btnCancelar: {
    backgroundColor: '#db2777',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  btnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
