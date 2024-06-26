import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export async function allMaisonsFavori() {
    const maisonListe = await pb.collection('maison').getFullList( {
      filter: 'favori=true'
    })
    return maisonListe
}

export async function allMaisonsSorted() {
    const maisonListe = await pb.collection('maison').getFullList({
      sort: '-created' 
    })
    return maisonListe
}

export async function getMaisonById(id: string) {
        const maison = await pb.collection('maison').getOne(id);
        return maison;
}


export async function allEventsByArtisteId(id: string) {
  const sorteRecordsArtiste = await pb.collection('maison').getFullList({
    expand: 'agent',
    filter: `agent.id = "${id}"`
  })
  return sorteRecordsArtiste
}

export async function allAgentSorted() {
  const agentListe = await pb.collection('agent').getFullList({
    sort: '-created'
  })
  return agentListe
}

