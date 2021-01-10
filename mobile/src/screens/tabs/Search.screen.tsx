// # PLUGINS IMPORTS
import React, { useEffect, useState } from "react"
import { View, StyleSheet, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

// # COMPONENTS IMPORTS

// # EXTRA IMPORTS

////////////////////////////////////////////////////////////////////////////////

export default function SearchScreen() {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Button
        title={"Go to plaid"}
        onPress={() => navigation.navigate("PlaidConnectScreen")}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
