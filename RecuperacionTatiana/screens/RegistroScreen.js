import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Asegúrate de instalar este módulo si no lo tienes
 
export default function RegistroScreen({ navigation, route }) {
  const [nombre, setNombre] = useState('');
  const [grado, setGrado] = useState('');
  const [observacion, setObservacion] = useState('');
  const [estado, setEstado] = useState('Pendiente');
 
  const handleSubmit = () => {
    if (!nombre || !grado || !observacion) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }
 
    if (route.params && route.params.addObservacion) {
      route.params.addObservacion({ nombre, grado, observacion, estado });
      navigation.goBack();
    } else {
      Alert.alert("Error", "No se pudo registrar la observación.");
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
 
      <Text style={styles.label}>Grado:</Text>
      <TextInput style={styles.input} value={grado} onChangeText={setGrado} />
 
      <Text style={styles.label}>Observación:</Text>
      <TextInput style={styles.input} value={observacion} onChangeText={setObservacion} />
 
      <Text style={styles.label}>Estado de la Observación:</Text>
      <Picker selectedValue={estado} style={styles.picker} onValueChange={(itemValue) => setEstado(itemValue)}>
        <Picker.Item label="Pendiente" value="Pendiente" />
        <Picker.Item label="Finalizada" value="Finalizada" />
      </Picker>
 
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginBottom: 5 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  picker: { height: 50, width: '100%' },
});