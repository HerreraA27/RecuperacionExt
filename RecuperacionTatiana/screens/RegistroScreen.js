// RegistroScreen.js

import React, { useState } from 'react';
import { View, TextInput, Text, Button, Picker, StyleSheet } from 'react-native';

const RegistroScreen = ({ navigation, setObservaciones }) => {
  const [nombre, setNombre] = useState('');
  const [grado, setGrado] = useState('');
  const [observacion, setObservacion] = useState('');
  const [estado, setEstado] = useState('Pendiente');

  const handleSave = () => {
    if (nombre && grado && observacion) {
      const nuevaObservacion = { nombre, grado, observacion, estado };
      setObservaciones((prevObservaciones) => [...prevObservaciones, nuevaObservacion]);
      navigation.goBack(); // Volver a la pantalla de gestión
    } else {
      alert('Por favor, complete todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Registro de Observación</Text>
      
      <Text>Nombre</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Grado</Text>
      <TextInput
        style={styles.input}
        value={grado}
        onChangeText={setGrado}
      />

      <Text>Observación</Text>
      <TextInput
        style={styles.input}
        value={observacion}
        onChangeText={setObservacion}
        multiline
      />

      <Text>Estado</Text>
      <Picker
        selectedValue={estado}
        style={styles.picker}
        onValueChange={(itemValue) => setEstado(itemValue)}
      >
        <Picker.Item label="Pendiente" value="Pendiente" />
        <Picker.Item label="Finalizada" value="Finalizada" />
      </Picker>

      <Button title="Guardar Observación" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default RegistroScreen;
