import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function GestionScreen({ navigation }) {
  const [observaciones, setObservaciones] = useState([]);
 
  const addObservacion = (observacion) => {
    setObservaciones([...observaciones, observacion]);
  };
 
  const updateEstado = (index) => {
    const newObservaciones = [...observaciones];
    newObservaciones[index].estado = newObservaciones[index].estado === 'Pendiente' ? 'Finalizada' : 'Pendiente';
    setObservaciones(newObservaciones);
  };
 
  return (
    <View style={styles.container}>
      <Button title="Agregar Observación" onPress={() => navigation.navigate('Registro', { addObservacion })} />
 
      <FlatList
        data={observaciones}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => updateEstado(index)} style={styles.card}>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Observación: {item.observacion}</Text>
            <Text>Estado: {item.estado}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 20, marginVertical: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
});