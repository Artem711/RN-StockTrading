import alpaca from "@master-chief/alpaca"
import alpacaConfig from "./config/alpaca"

const client = new alpaca.AlpacaClient({
  credentials: {
    key: alpacaConfig.ALPACA_API_KEY_ID,
    secret: alpacaConfig.ALPACA_API_SECRET_KEY,
  },
})

const getData = async () => {
  const account = await client.getAccount()

  console.log(await client.isAuthenticated())

  console.log(account.buying_power) // number
  console.log(account.raw().buying_power) // string
}

getData()
