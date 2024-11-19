import { NavigationContainer } from '@react-navigation/native';
import NewUser from './Screens/NewUser';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './Screens/Auth';
import Acceuil from './Screens/Acceuil';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="auth" component={Auth}></Stack.Screen>
        <Stack.Screen
          name="newUser"
          component={NewUser}
        ></Stack.Screen>
        <Stack.Screen
          name="acceuil"
          component={Acceuil}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
