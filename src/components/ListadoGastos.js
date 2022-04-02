import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({gastos = [], setModal, setGasto}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Listado de Gastos</Text>

      {gastos.length === 0 ? (
        <Text style={styles.noGastos}>No hay gastos</Text>
      ) : (
        gastos.map(gasto => (
          <Gasto key={gasto.id} gasto={gasto} setModal={setModal} setGasto={setGasto} />
        ))
      )}
    </View>
  );
};

export default ListadoGastos;

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 70,
    marginBottom: 100,
  },
  titulo: {
    color: '#64748b',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
    marginBottom: -10,
  },
  noGastos: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});
