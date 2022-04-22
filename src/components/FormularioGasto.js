import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import globalStyles from '../styles/';

const FormularioGasto = ({
  setModal,
  handleNuevoGasto,
  setGasto,
  gasto,
  eliminarGasto,
}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if (gasto?.nombre) {
      setNombre(gasto.nombre);
      setCantidad(gasto.cantidad);
      setCategoria(gasto.categoria);
      setId(gasto.id);
      setFecha(gasto.fecha);
    }
  }, [gasto]);

  return (
    <SafeAreaView style={styles.contenedor}>
      <View
        style={{
          marginHorizontal: 10,
        }}></View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>
          {gasto?.nombre ? 'Editar' : 'Nuevo'} gasto
        </Text>

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
          onPress={() =>
            handleNuevoGasto({nombre, cantidad, categoria, id, fecha})
          }>
          <Text style={styles.btnTexto}>
            {gasto?.nombre ? 'Guardar cambios' : 'Guardar concepto'}
          </Text>
        </Pressable>

        <View style={styles.contenedorBtn}>
          <Pressable
            style={[styles.btn, styles.btnCancelar]}
            onLongPress={() => {
              setModal(false);
              setGasto({});
            }}>
            <Text style={styles.btnTexto}>Cancelar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => eliminarGasto(id)}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
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
  contenedorBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: '48%',
  },
  btnEliminar: {
    backgroundColor: 'red',
  },
  btnCancelar: {
    backgroundColor: '#db2777',
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
  btnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
