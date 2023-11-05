import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import firebase from 'firebase/app';
import 'firebase/auth'; 
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import  Welcome from "./screens/Welcome";

// import * as firebase from 'firebase';

const Stack = createNativeStackNavigator();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR4ESsPwkHNm3197drg0HAy0r5jeR6i5c",
  authDomain: "newdailyapp-4f94c.firebaseapp.com",
  projectId: "newdailyapp-4f94c",
  storageBucket: "newdailyapp-4f94c.appspot.com",
  messagingSenderId: "860488534669",
  appId: "1:860488534669:web:12e0ee01f859efda4170c4"
};

const app = initializeApp(firebaseConfig);

const AppStack = createNativeStackNavigator({
  Home: Home
})
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}