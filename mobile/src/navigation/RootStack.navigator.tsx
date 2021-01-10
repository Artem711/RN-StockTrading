// # PLUGINS IMPORTS
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

// # COMPONENTS IMPORTS
import BottomTabNavigator from "./BottomTab.navigator"
import PlaidConnectScreen from "~/screens/simple/PlaidConnect.screen"

// # EXTRA IMPORTS
import { IRootStackNav } from "~/shared/typings"

////////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator<IRootStackNav>()

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="PlaidConnectScreen" component={PlaidConnectScreen} />
    </Stack.Navigator>
  )
}
