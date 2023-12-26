import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import  Welcome from "../screens/Welcome";
import  Home from "../screens/Home";
import  BottomTab from "../screens/ButtomTab";
import Trending from '../screens/Trending'
import Save from '../screens/Save'
import Profile from '../screens/Profile'
import Setting from '../screens/Setting'
import Dark_Mode from '../screens/Dark_Mode'
import Following from '../screens/Following'
import Notification from '../screens/Following'
import Privacy_Policy from '../screens/Following'
import Read_Later from '../screens/Following'
import Read_Recently from '../screens/Dark_Mode'
import Saved from '../screens/Following'
import Terms_Of_Use from '../screens/Following'
import Reading_Mode from '../screens/Reading_Mode'
import Search from '../screens/Search'
import Posts from '../screens/Posts'
import TabView from '../screens/TabView'

const Stack = createNativeStackNavigator();


export default function AppNavigator() {
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
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trending"
          component={Trending}
        />
        <Stack.Screen
          name="Save"
          component={Save}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
        />
        <Stack.Screen
          name="Dark_Mode"
          component={Dark_Mode}
        />
        <Stack.Screen
          name="Following"
          component={Following}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          name="Privacy_Policy"
          component={Privacy_Policy}
        />
        <Stack.Screen
          name="Read_Later"
          component={Read_Later}
        />
        <Stack.Screen
          name="Read_Recently"
          component={Read_Recently}
        />
        <Stack.Screen
          name="Saved"
          component={Saved}
        />
        <Stack.Screen
          name="Terms_Of_Use"
          component={Terms_Of_Use}
        />
        <Stack.Screen
          name="Reading_Mode"
          component={Reading_Mode}
        />
        <Stack.Screen
          name="Search"
          component={Search}
        />
        <Stack.Screen
          name="Posts"
          component={Posts}
        />
        <Stack.Screen
          name="TabView"
          component={TabView}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}



