const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AddMember1 from "./screens/AddMember1";
import SignInPage from "./screens/SignInPage";
import LoginPage from "./screens/LoginPage";
import AddExpense from "./screens/AddExpense";
import MainPage from "./screens/MainPage";
import StartPage from "./screens/StartPage";
import ForgotPassword from "./screens/ForgotPassword";
import CurrentDebts from "./screens/CurrentDebts";
import NewExpense from "./screens/NewExpense";
import FindMemberInApp1 from "./screens/FindMemberInApp1";
import FindMemberInApp from "./screens/FindMemberInApp";
import AddMember from "./screens/AddMember";
import CreateAGroup from "./screens/CreateAGroup";
import MyGroups from "./screens/MyGroups";
import LastExpenses from "./screens/LastExpenses";
import WrongPassword from "./screens/WrongPassword";
import EditGroups from "./screens/EditGroups";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AddMember1"
              component={AddMember1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInPage"
              component={SignInPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddExpense"
              component={AddExpense}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartPage"
              component={StartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentDebts"
              component={CurrentDebts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewExpense"
              component={NewExpense}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindMemberInApp1"
              component={FindMemberInApp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindMemberInApp"
              component={FindMemberInApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddMember"
              component={AddMember}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAGroup"
              component={CreateAGroup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyGroups"
              component={MyGroups}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LastExpenses"
              component={LastExpenses}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WrongPassword"
              component={WrongPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditGroups"
              component={EditGroups}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
