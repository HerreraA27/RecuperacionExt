/*Importación de las dependencias para crear la navegación */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importación de las pantallas */
import RegistroScreen from './screens/RegistroScreen';
import GestionScreen from './screens/GestionScreen';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='RegistroScreen'

        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="RegistroScreen" component={RegistroScreen} />
        <Stack.Screen name="GestionScreen" component={GestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
