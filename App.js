import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/Welcome';
import SignUp from './src/SignUp';
import Login from './src/Login';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
   
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App