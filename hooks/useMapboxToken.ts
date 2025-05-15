"use client"

import { useState, useEffect } from "react"

export function useMapboxToken() {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch("/api/mapbox-token")
        const data = await response.json()
        setToken(data.token)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch Mapbox token"))
        setLoading(false)
      }
    }

    fetchToken()
  }, [])

  return { token, loading, error }
}
