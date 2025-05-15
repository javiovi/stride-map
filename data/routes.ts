export interface Route {
  id: string
  name: string
  coordinates: [number, number][]
  distance: string
  difficulty: string
}

export const SAMPLE_ROUTES: Route[] = [
  {
    id: "route-1",
    name: "Parque Centenario",
    coordinates: [
      [-58.4352, -34.6065],
      [-58.4332, -34.6075],
      [-58.4312, -34.6055],
      [-58.4332, -34.6035],
      [-58.4352, -34.6045],
      [-58.4352, -34.6065],
    ],
    distance: "2.5 km",
    difficulty: "Fácil",
  },
  {
    id: "route-2",
    name: "Bosques de Palermo",
    coordinates: [
      [-58.4152, -34.5765],
      [-58.4172, -34.5755],
      [-58.4202, -34.5765],
      [-58.4222, -34.5785],
      [-58.4202, -34.5805],
      [-58.4172, -34.5795],
      [-58.4152, -34.5765],
    ],
    distance: "4.2 km",
    difficulty: "Moderado",
  },
  {
    id: "route-3",
    name: "Costanera Sur",
    coordinates: [
      [-58.3552, -34.6165],
      [-58.3532, -34.6145],
      [-58.3512, -34.6125],
      [-58.3492, -34.6145],
      [-58.3472, -34.6165],
      [-58.3492, -34.6185],
      [-58.3512, -34.6205],
      [-58.3532, -34.6185],
      [-58.3552, -34.6165],
    ],
    distance: "5.8 km",
    difficulty: "Moderado",
  },
]
