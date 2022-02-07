import type { StringOrNull } from './types'

export interface PokemonApi {
    count: number
    next: StringOrNull
    previous: StringOrNull
    results: NameNUrl[]
}

export interface Pokemon {
    abilities: Abilitie[]
    base_experience: number
    forms: NameNUrl[]
    game_indices: GameIndice[]
    height: number
    held_items: HeldItem[] | []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Move[]
    name: string
    order: number
    past_types: []
    species: NameNUrl
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
}

export interface NameNUrl {
    name: string
    url: string
}

interface HeldItem {
    item: NameNUrl
    version_details: VD[]
}

interface VD {
    rarity: number
    version: NameNUrl
}

export interface Type {
    slot: number
    type: NameNUrl
}

interface Abilitie {
    ability: NameNUrl
    is_hidden: boolean
    slot: number
}

interface GameIndice {
    game_index: number
    version: NameNUrl
}

interface VGD {
    level_learned_at: number
    move_learn_method: NameNUrl
    version_group: NameNUrl
}

interface Move {
    move: NameNUrl
    version_group_details: VGD[]
}

export interface Stat {
    base_stat: number
    effort: number
    stat: NameNUrl
}

interface Other {
    dream_world: FrontDefault
    home: Home
    'official-artwork': {
        front_default: string
    }
}

interface FrontDefault {
    front_default: string
    front_female?: StringOrNull
}

interface Home {
    front_default: string
    front_female?: StringOrNull
    front_shiny: string
    front_shiny_female?: StringOrNull
}

interface Sprites {
    back_default: string
    back_female?: StringOrNull
    back_shiny: string
    back_shiny_female?: StringOrNull
    front_default: string
    front_female?: StringOrNull
    front_shiny: string
    front_shiny_female?: StringOrNull
    other: Other
    version?: object
}
