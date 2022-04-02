import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {formatCurrency, formatDate} from '../helpers';

import globalStyles from '../styles';

const iconos = {
  ahorro: require('../img/icono_ahorro.png'),
  comida: require('../img/icono_comida.png'),
  casa: require('../img/icono_casa.png'),
  salud: require('../img/icono_salud.png'),
  ocio: require('../img/icono_ocio.png'),
  suscripciones: require('../img/icono_suscripciones.png'),
  gastos: require('../img/icono_gastos.png'),
};

const Gasto = ({gasto}) => {
  const {nombre, categoria, cantidad, fecha} = gasto;

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenido}>
        <View style={styles.contenedorImagen}>
          <Image style={styles.imagen} source={iconos[categoria]} />

          <View style={styles.contenedorTexto}>
            <Text style={styles.categoria}>{categoria}</Text>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.fecha}>Fecha: {formatDate(fecha)}</Text>
          </View>
        </View>

        <Text style={styles.cantidad}>{formatCurrency(cantidad)}</Text>
      </View>
    </View>
  );
};

export default Gasto;

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    marginBottom: 30,
  },
  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contenedorImagen: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imagen: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  contenedorTexto: {
    flex: 1,
  },
  categoria: {
    color: '#94a3b8',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  nombre: {
    fontSize: 22,
    color: '#64748b',
    marginBottom: 5,
  },
  cantidad: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  fecha: {
    fontWeight: '700',
    color: '#db2777',
  },
});
