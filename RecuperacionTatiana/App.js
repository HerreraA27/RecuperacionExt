// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistroScreen from './screens/RegistroScreen';
import GestionScreen from './screens/GestionScreen';

const Stack = createStackNavigator();

export default function App() {
  const [observaciones, setObservaciones] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gestion">
        <Stack.Screen name="Registro">
          {(props) => <RegistroScreen {...props} setObservaciones={setObservaciones} />}
        </Stack.Screen>
        <Stack.Screen name="Gestion">
          {(props) => <GestionScreen {...props} observaciones={observaciones} setObservaciones={setObservaciones} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
