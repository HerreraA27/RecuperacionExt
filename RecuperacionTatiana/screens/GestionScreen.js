import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import ObservationItem from '../components/ObservationItem';

export default function GestionScreen({ route, navigation }) {
  const { observaciones } = route.params || { observaciones: [] }; // Verifica que lleguen correctamente

  const [updatedObservations, setUpdatedObservations] = useState(observaciones);

  const handleUpdateEstado = (index, newEstado) => {
    const updated = [...updatedObservations];
    updated[index].estado = newEstado;
    setUpdatedObservations(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Observaciones</Text>
      <FlatList
        data={updatedObservations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ObservationItem
            item={item}
            onUpdateEstado={(newEstado) => handleUpdateEstado(index, newEstado)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});