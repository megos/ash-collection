import { icon } from 'leaflet'
import iconRetinaUrl from './assets/marker-icon-2x.png'
import iconUrl from './assets/marker-icon.png'

export const customIcon = icon({
  iconRetinaUrl,
  iconUrl,
  iconSize: [22, 41],
  iconAnchor: [11, 41],
  popupAnchor: [0, -41],
})
