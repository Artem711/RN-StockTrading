// # PLUGINS IMPORTS
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"

// # COMPONENTS IMPORTS
import Positions from "~/components/organisms/positions"
import BlockWrap from "~/components/molecules/block-wrap"

// # EXTRA IMPORTS
import { useRequest } from "~/shared/hooks/useRequest"

////////////////////////////////////////////////////////////////////////////////

export default function DashboardScreen() {
  const { data, error } = useRequest("v2/account")

  if (error) {
    return <Text>Error...</Text>
  }

  if (!data) {
    return <Text>Loading...</Text>
  }

  const markets = []

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BlockWrap title={"Account"} style={styles.row}>
          <View>
            <Text>Buying Power: {data.buying_power}</Text>
            <Text>Long market value: {data.long_market_value}</Text>
          </View>
          <View>
            <Text>Portfolio value: {data.portfolio_value}</Text>
            <Text>Cash: {data.cash}</Text>
          </View>
        </BlockWrap>
        <BlockWrap title={"Market"}>
          <View>
            <Text></Text>
          </View>
        </BlockWrap>
        <Positions />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})
