import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import  Home from "../screens/Home";
import  Favorites from "../screens/Favorites";
import  Profile from "../screens/Profile";
import Menu from "../screens/Menu";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
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
          options={{ 
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="Favorites" 
          component={Favorites} 
          options={{ 
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ 
            headerShown: false
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}