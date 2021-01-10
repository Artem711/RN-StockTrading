// # PLUGINS IMPORTS
import React, { ReactNode } from "react"
import { View, Text, StyleSheet, ViewStyle, ViewProps } from "react-native"

// # COMPONENTS IMPORTS

// # EXTRA IMPORTS

////////////////////////////////////////////////////////////////////////////////

interface IProps extends ViewProps {
  children: ReactNode
  title: string
}

export default function BlockWrap(props: IProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.title}</Text>
      <View {...props} style={props.style}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffbcbc",
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 10,
  },

  title: {
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 4,
  },
})
