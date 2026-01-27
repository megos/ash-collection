import { icon } from 'leaflet'
import iconUrl from './assets/marker-icon.svg'

const x = 128 / 5
const y = 208 / 5

export const customIcon = icon({
  iconUrl,
  iconSize: [x, y],
  iconAnchor: [x / 2, y],
  popupAnchor: [0, -y],
})
