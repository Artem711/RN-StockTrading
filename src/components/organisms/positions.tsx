// # PLUGINS IMPORTS
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useRequest } from "~/shared/hooks/useRequest"

// # COMPONENTS IMPORTS
import BlockWrap from "~/components/molecules/block-wrap"

// # EXTRA IMPORTS

////////////////////////////////////////////////////////////////////////////////

export default function Positions() {
  const { data, error } = useRequest("v2/positions")

  console.log(data)
  if (error) {
    return <Text>Error...</Text>
  }

  if (!data) {
    return <Text>Loading...</Text>
  }

  return (
    <BlockWrap title={"Positions"}>
      {data.map((item: any) => (
        <View>
          <Text>Text</Text>
        </View>
      ))}
    </BlockWrap>
  )
}

const styles = StyleSheet.create({})
