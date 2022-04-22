import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({
  gastos = [],
  setModal,
  setGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Listado de Gastos</Text>

      {filtro
        ? gastosFiltrados.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setModal={setModal}
              setGasto={setGasto}
            />
          ))
        : gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setModal={setModal}
              setGasto={setGasto}
            />
          ))}

      {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro)) && (
        <Text style={styles.noGastos}>No hay gastos</Text>
      )}
    </View>
  );
};

export default ListadoGastos;

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 20,
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
