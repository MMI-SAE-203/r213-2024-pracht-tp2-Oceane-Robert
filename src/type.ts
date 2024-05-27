export interface MaisonRecord {
  adresse: string
  collectionId: string
  collectionName: string
  created: string
  favori: boolean
  id: string
  image: string[]
  nbChambres: number
  nbSdb: number
  nomMaison: string
  prix: number
  surface: number
  updated: string
  agent: string
}

export interface AgentRecord {
  collectionId: string
  collectionName: string
  created: string
  id: string
  Nom: string
  Prenom: string
  Adresse: string
  Numerotelephone: number
  e_mail: string
  updated: string
}

