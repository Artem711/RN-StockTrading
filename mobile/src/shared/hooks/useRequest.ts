import useSwr from "swr"
import alpacaConfig from "~/shared/config/alpaca"

export const useRequest = (path: routes) => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = alpacaConfig.BASE_URL + path
  const response = useSwr(url, { fetcher })

  return response
}

const fetcher = async (url: string) => {
  return await fetch(url, {
    method: "GET",
    headers: {
      "APCA-API-KEY-ID": alpacaConfig.ALPACA_API_KEY_ID,
      "APCA-API-SECRET-KEY": alpacaConfig.ALPACA_API_SECRET_KEY,
    },
  } as any).then((response) => response.json())
}

export type routes = "v2/account" | "v2/positions"
