import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Pressable,
  Image,
  Modal,
  Text,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ControlPresupuesto from './src/components/ControlPresupuesto';
import Filtro from './src/components/Filtro';
import FormularioGasto from './src/components/FormularioGasto';
import Header from './src/components/Header';
import ListadoGastos from './src/components/ListadoGastos';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import {generarID} from './src/helpers';

const App = () => {
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false);
  const [presupuesto, setPresupuesto] = useState('');
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    const obtenerPresupuestoStorage = async () => {
      try {
        const presupuestoStorage =
          (await AsyncStorage.getItem('planificador_presupuesto')) ?? 0;
        if (presupuestoStorage > 0) {
          setPresupuesto(presupuestoStorage);
          setIsPresupuestoValid(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    obtenerPresupuestoStorage();
  }, []);

  useEffect(() => {
    if (isPresupuestoValid) {
      const guardarPresupuestoStorage = async () => {
        try {
          await AsyncStorage.setItem('planificador_presupuesto', presupuesto);
        } catch (err) {
          console.error(err);
        }
      };
      guardarPresupuestoStorage();
    }
  }, [isPresupuestoValid]);

  useEffect(() => {
    const guardarGastosStorage = async () => {
      try {
        await AsyncStorage.setItem(
          'planificador_gastos',
          JSON.stringify(gastos),
        );
      } catch (error) {
        console.error(error);
      }
      guardarGastosStorage();
    };
  }, [gastos]);

  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      setIsPresupuestoValid(true);
    } else {
      Alert.alert('Error', 'El presupuesto debe ser mayo a cero');
    }
  };

  const handleNuevoGasto = gasto => {
    if ([gasto.nombre, gasto.cantidad, gasto.categoria].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (gasto.id) {
      const gastoActualizado = gastos.map(gastoState =>
        gastoState.id === gasto.id ? gasto : gastoState,
      );
      setGastos(gastoActualizado);
    } else {
      // Añadir el gasto al state
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setModal(!modal);
  };

  const eliminarGasto = id => {
    Alert.alert(
      '¿Estás seguro?',
      'Una vez eliminado no hay forma de recuperarlo',
      [
        {text: 'No', style: 'cancel'},
        {
          text: 'Si, eliminar.',
          onPress: () => {
            const gastosActualizados = gastos.filter(
              gastoState => gastoState.id !== id,
            );
            setGastos(gastosActualizados);
            setModal(!modal);
            setGasto({});
          },
        },
      ],
    );
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>
          <Header />

          {isPresupuestoValid ? (
            <>
              <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
            </>
          ) : (
            <NuevoPresupuesto
              handleNuevoPresupuesto={handleNuevoPresupuesto}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
            />
          )}
        </View>

        {isPresupuestoValid && (
          <>
            <Filtro
              setFiltro={setFiltro}
              setGastosFiltrados={setGastosFiltrados}
              filtro={filtro}
              gastos={gastos}
            />

            <ListadoGastos
              gastos={gastos}
              setModal={setModal}
              setGasto={setGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </>
        )}
      </ScrollView>

      {modal && (
        <Modal
          visible={modal}
          animationType={'slide'}
          onRequestClose={() => setModal(!modal)}>
          <FormularioGasto
            setModal={setModal}
            handleNuevoGasto={handleNuevoGasto}
            gasto={gasto}
            setGasto={setGasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}

      {isPresupuestoValid && (
        <Pressable onPress={() => setModal(!modal)} style={styles.fab}>
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    position: 'relative',
  },
  header: {
    backgroundColor: '#3b8df6',
    minHeight: 420,
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  imagen: {
    width: 60,
    height: 60,
  },
});

export default App;
