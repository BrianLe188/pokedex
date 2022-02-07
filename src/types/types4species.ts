import { NameNUrl } from './types4poke'

export interface Species {
    flavor_text_entries: FlavorText[]
}

export interface FlavorText {
    flavor_text?: string
    language: NameNUrl
    version: NameNUrl
}
