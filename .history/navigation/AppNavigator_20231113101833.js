import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import  Welcome from "../screens/Welcome";
import  Home from "../screens/Home";
import  Menu from "../screens/Home";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}