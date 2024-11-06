import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Picker } from 'react-native';

export default function RegistroScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [grado, setGrado] = useState('');
  const [observacion, setObservacion] = useState('');
  const [estado, setEstado] = useState('Pendiente');

  const [observaciones, setObservaciones] = useState([]);

  const handleRegistrar = () => {
    if (nombre && grado && observacion) {
      const nuevaObservacion = { nombre, grado, observacion, estado };
      setObservaciones([...observaciones, nuevaObservacion]);
      setNombre('');
      setGrado('');
      setObservacion('');
      setEstado('Pendiente');
      alert('Observación registrada con éxito');
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Observación</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Estudiante"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Grado"
        value={grado}
        onChangeText={setGrado}
      />
      <TextInput
        style={styles.input}
        placeholder="Observación"
        value={observacion}
        onChangeText={setObservacion}
      />
      <Picker
        selectedValue={estado}
        style={styles.picker}
        onValueChange={(itemValue) => setEstado(itemValue)}
      >
        <Picker.Item label="Pendiente" value="Pendiente" />
        <Picker.Item label="Finalizada" value="Finalizada" />
      </Picker>
      <Button title="Registrar" onPress={handleRegistrar} />
      <Button
        title="Ir a Gestión de Observaciones"
        onPress={() => navigation.navigate('Gestión', { observaciones })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});