import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { PokemonApi } from '../types/types4poke'
import { Pokeapi } from '../apis/pokeapi'
import axios from 'axios'

export interface InitialState {
    pokemon: PokemonApi
}

// use enum to get http request
// example: Pokeapi.pokemon will get ("https://pokeapi.co/api/v2/pokemon/")
export const getPoke = createAsyncThunk(
    'poke/fetchpokemon',
    async (limit?: number) => {
        try {
            const request = `${Pokeapi.pokemon}?offset=0&limit=${
                limit ? limit : 1118
            }`
            const response = await axios.get<PokemonApi>(request)
            const result: PokemonApi = response.data
            return result
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState: InitialState = {
    pokemon: {
        count: 0,
        next: null,
        previous: null,
        results: [],
    },
}

const pokeSlice = createSlice({
    name: 'poke',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // getPoke
            .addCase(getPoke.pending, state => {
                // reset state.pokemon.results to empty array
                // because after searching and I want to go back to default,
                // the previous Pokemon list is still there and will make the item unnecessary.
                // so i reset the state.pokemon.results with a empty array
                state.pokemon = { ...state.pokemon, results: [] }
                console.log(
                    'getPoke/fetching pokemon: reset state.pokemon.results with a empty array'
                )
            })
            .addCase(getPoke.fulfilled, (state, action) => {
                // and update new state.pokemon when i fetched api
                if (action.payload !== undefined) {
                    state.pokemon = action.payload
                }
            })
            .addCase(getPoke.rejected, () => {
                console.log('getPoke/failed')
            })
    },
})

const pokeReducer = pokeSlice.reducer

export const {} = pokeSlice.actions

export const selectPoke = (state: RootState) => state.pokeReducer

export default pokeReducer
