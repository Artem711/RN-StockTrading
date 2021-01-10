// # PLUGINS IMPORTS
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"

// # COMPONENTS IMPORTS
import Positions from "~/components/organisms/positions"
import BlockWrap from "~/components/molecules/block-wrap"

// # EXTRA IMPORTS
import alpaca from "@master-chief/alpaca"

////////////////////////////////////////////////////////////////////////////////

export default function ActivityScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BlockWrap title={"Account"}>dsa</BlockWrap>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
