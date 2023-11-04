import { env } from '@env'

export const api = async <T>(path: string, init?: RequestInit) => {
  const baseURL = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseURL)

  const response = await fetch(url, init)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  const data: T = await response.json()

  return data
}
