import { NextResponse } from "next/server"
import { serverEnv } from "@/lib/env-config"

export async function GET() {
  // Usar la configuración centralizada
  const mapboxToken = serverEnv.mapboxToken

  if (!mapboxToken) {
    return NextResponse.json({ error: "Token no configurado en el servidor" }, { status: 500 })
  }

  return NextResponse.json({ token: mapboxToken })
}
