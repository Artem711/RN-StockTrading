// # PLUGINS IMPORTS
import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import PlaidLink from "@burstware/expo-plaid-link"

// # COMPONENTS IMPORTS

// # EXTRA IMPORTS
import plaidConfig from "~/shared/config/plaid"
import plaid from "plaid"

////////////////////////////////////////////////////////////////////////////////

export default function SearchScreen() {
  const [token, setToken] = useState<string | undefined>(undefined)

  const plaidClient = new plaid.Client({
    clientID: plaidConfig.PLAID_CLIENT_ID,
    secret: plaidConfig.PLAID_SECRET,
    env: plaidConfig.PLAID_ENVIRONMENT,
    options: { version: "2019-05-29" },
  })

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await plaidClient.createLinkToken({
  //       user: {
  //         client_user_id: plaidConfig.PLAID_CLIENT_ID,
  //       },
  //       client_name: "Plaid Test App",
  //       products: ["auth", "transactions"],
  //       country_codes: ["GB"],
  //       language: "en",
  //       webhook: "https://sample-web-hook.com",
  //     })

  //     const linkToken = response.link_token
  //     console.log(linkToken)
  //   }

  //   getData()
  // }, [])
  return (
    <View>
      {token && (
        <PlaidLink
          linkToken={token}
          onEvent={(event) => console.log(event)}
          onExit={(exit) => console.log(exit)}
          onSuccess={(success) => console.log(success.publicToken)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({})
