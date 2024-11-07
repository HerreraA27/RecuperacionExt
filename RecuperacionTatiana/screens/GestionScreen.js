// GestionScreen.js

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const GestionScreen = ({ observaciones, setObservaciones, navigation }) => {

  const handleUpdateEstado = (index) => {
    const updatedObservaciones = [...observaciones];
    updatedObservaciones[index].estado = updatedObservaciones[index].estado === 'Pendiente' ? 'Finalizada' : 'Pendiente';
    setObservaciones(updatedObservaciones);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.observacionItem}>
      <Text>{item.nombre}</Text>
      <Text>{item.grado}</Text>
      <Text>{item.observacion}</Text>
      <Text>Estado: {item.estado}</Text>
      <Button title="Actualizar Estado" onPress={() => handleUpdateEstado(index)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Gestión de Observaciones</Text>
      
      <FlatList
        data={observaciones}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Button title="Agregar Observación" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  observacionItem: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
  },
});

export default GestionScreen;
