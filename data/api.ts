import { destinos, type Destino } from './destinos'

export function fetchDestinos(): Promise<Destino[]> {
  return new Promise(resolve => setTimeout(() => resolve(destinos), 400))
}
