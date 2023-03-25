import { csvStr } from './3-16_takuchikohai'

const rows: string[] = csvStr.trim().split('\n')
export const markers = rows.map(row => {
  const [name, lng, lat] = row.split(',')
  return { name, lng: Number(lng), lat: Number(lat) }
})
