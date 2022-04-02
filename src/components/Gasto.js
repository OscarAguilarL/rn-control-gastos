import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {formatCurrency} from '../helpers';

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
  const {nombre, categoria, cantidad, id} = gasto;

  return (
    <View style={styles.contenedor}>
      <View>
        <Image source={iconos[categoria]} />

        <View>
          <Text>{categoria}</Text>
          <Text>{nombre}</Text>
        </View>

        <Text>{formatCurrency(cantidad)}</Text>
      </View>
    </View>
  );
};

export default Gasto;

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
});
