import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ObservationItem({ item, onUpdateEstado }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}><strong>Nombre:</strong> {item.nombre}</Text>
      <Text style={styles.text}><strong>Grado:</strong> {item.grado}</Text>
      <Text style={styles.text}><strong>Observación:</strong> {item.observacion}</Text>
      <Text style={styles.text}><strong>Estado:</strong> {item.estado}</Text>
      <Button title="Cambiar a Finalizada" onPress={() => onUpdateEstado('Finalizada')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    marginBottom: 5,
  },
});