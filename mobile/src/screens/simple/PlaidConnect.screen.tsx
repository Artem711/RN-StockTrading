// # PLUGINS IMPORTS
import React, { useEffect, useState } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import PlaidLink from "@burstware/expo-plaid-link"

// # COMPONENTS IMPORTS

// # EXTRA IMPORTS
import plaidConfig from "~/shared/config/plaid"
import plaid from "plaid"

////////////////////////////////////////////////////////////////////////////////

export default function PlaidConnectScreen() {
  const [token, setToken] = useState<string | undefined>(undefined)

  const plaidClient = new plaid.Client({
    clientID: plaidConfig.PLAID_CLIENT_ID,
    secret: plaidConfig.PLAID_SECRET,
    env: plaid.environments.sandbox,
    options: { version: "2019-05-29" },
  })

  useEffect(() => {
    const getData = async () => {
      const response = await plaidClient.createLinkToken({
        user: {
          client_user_id: "9abc38c3d5f57edf41926d03892f30",
        },
        client_name: "Plaid Test App",
        products: ["auth", "transactions"],
        country_codes: ["US"],
        language: "en",
      })

      const linkToken = response.link_token
      console.log(linkToken)
      setToken(linkToken)
    }

    getData()
  }, [])

  if (token) {
    return (
      <PlaidLink
        linkToken={token}
        onEvent={(event) => console.log(event, "event")}
        onExit={(exit) => console.log(exit, "exit")}
        onSuccess={(success) => console.log(success.publicToken, "success")}
      />
    )
  } else {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
