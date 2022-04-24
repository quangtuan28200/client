import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Intro from "./src/screens/Intro/Intro";
import HomeScreen from "./src/screens/Home/HomeScreen";
import DetailsScreen from "./src/screens/Details/DetailsScreen";
import Tabs from "./src/navigation/Tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  );
}

{
  /* <Stack.Navigator
  screenOptions={{ headerShown: false }}
  initialRouteName={"Tabs"}
>
  <Stack.Screen name="Tabs" component={Tabs} />
  {/* <Stack.Screen name="Details" component={DetailsScreen} /> */
}
// </Stack.Navigator>; */}
