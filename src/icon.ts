import { icon } from 'leaflet'
import iconUrl from './assets/marker-icon.webp'
import iconRetinaUrl from './assets/marker-icon-2x.webp'

export const customIcon = icon({
  iconRetinaUrl,
  iconUrl,
  iconSize: [22, 41],
  iconAnchor: [11, 41],
  popupAnchor: [0, -41],
})
