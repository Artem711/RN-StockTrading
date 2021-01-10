// # PLUGINS IMPORTS
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// # COMPONENTS IMPORTS
import DashboardScreen from "~/screens/tabs/Dashboard.screen"
import ActivityScreen from "~/screens/tabs/Activity.screen"
import SearchScreen from "~/screens/tabs/Search.screen"
import SettingsScreen from "~/screens/tabs/Settings.screen"

// # EXTRA IMPORTS
import { useColorScheme } from "~/shared/hooks"
import { colors } from "~/shared/constants/theme"

import { IBottomTabNav } from "~/shared/typings"
import { Ionicons } from "@expo/vector-icons"

////////////////////////////////////////////////////////////////////////////////
const Tab = createBottomTabNavigator<IBottomTabNav>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      tabBarOptions={{ activeTintColor: colors[colorScheme].tint }}
    >
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"airplane"} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"airplane"} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"airplane"} color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"airplane"} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
