import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Logingscreen";
import HomeScreen from "./homescreen";
import MenuScreen from "./MenuScreen";
import RecetasScreen from "./RecetasScreen";
import FamiliaScreen from "./FamiliaScreen";
import TramitesScreen from "./TramitesScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Menú" component={MenuScreen} />
      <Stack.Screen name="Recetas" component={RecetasScreen} />
      <Stack.Screen name="Familia" component={FamiliaScreen} />
      <Stack.Screen name="Trámites" component={TramitesScreen} />
    </Stack.Navigator>
  );
}
