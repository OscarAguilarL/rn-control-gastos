import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Control de presupuesto</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingTop: 20,
  },
});
