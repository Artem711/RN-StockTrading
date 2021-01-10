// # PLUGINS IMPORTS
import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

// # COMPONENTS IMPORTS
import Navigation from "./src/navigation"

// # EXTRA IMPORTS
import useCachedResources from "./src/shared/hooks/useCachedResources"
import useColorScheme from "./src/shared/hooks/useColorScheme"

////////////////////////////////////////////////////////////////////////////////

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
