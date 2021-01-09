// # PLUGINS IMPORTS
import React from "react"
import { ColorSchemeName } from "react-native"
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native"

// # COMPONENTS IMPORTS
import RootNavigator from "./RootStack.navigator"

// # EXTRA IMPORTS

////////////////////////////////////////////////////////////////////////////////

interface IProps {
  colorScheme: ColorSchemeName
}

export default function Navigation({ colorScheme }: IProps) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}
