import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistroScreen from './screens/RegistroScreen';
import GestionScreen from './screens/GestionScreen';
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gestion">
        <Stack.Screen name="Gestion" component={GestionScreen} options={{ title: 'Gestión de Observaciones' }} />
        <Stack.Screen name="Registro" component={RegistroScreen} options={{ title: 'Registrar Observación' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 