import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import globalStyles from '../styles';
import {formatCurrency} from '../helpers';
import CircularProgress from 'react-native-circular-progress-indicator';

const ControlPresupuesto = ({presupuesto, gastos, resetearApp}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0,
    );
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje =
      ((presupuesto - totalDisponible) / presupuesto) * 100;

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 700);
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <CircularProgress
          value={porcentaje}
          duration={1000}
          radius={120}
          valueSuffix="%"
          title="Gastado"
          inActiveStrokeColor="#f5f5f5"
          inActiveStrokeWidth={20}
          activeStrokeColor="#3b82f6"
          activeStrokeWidth={20}
          titleStyle={{fontWeight: 'bold', fontSize: 20}}
          titleColor="#64748b"
        />
      </View>

      <View style={styles.contenedorTexto}>
        <Pressable style={styles.boton} onLongPress={resetearApp}>
          <Text style={styles.textoBoton}>Reiniciar Aplicación</Text>
        </Pressable>

        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: </Text>
          {formatCurrency(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: </Text>
          {formatCurrency(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: </Text>
          {formatCurrency(gastado)}
        </Text>
      </View>
    </View>
  );
};

export default ControlPresupuesto;

const styles = StyleSheet.create({
  contenedor: {...globalStyles.contenedor},
  centrarGrafica: {
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#db2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 10,
  },
  textoBoton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contenedorTexto: {
    marginTop: 50,
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '700',
    color: '#3b82f6',
  },
});
