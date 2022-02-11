import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Pokemon, NameNUrl } from '../types/types4poke'
import axios from 'axios'

export interface InitialState {
    pokePerPage: number
    currentPage: number
    totalPage: number
}

interface PageAction {
    payload: number
    type: string
}

const initialState: InitialState = {
    pokePerPage: 20,
    currentPage: 1,
    totalPage: 0,
}

const pokeCardSlice = createSlice({
    name: 'pokecard',
    initialState,
    reducers: {
        calculaTotalPage: (state, action: PageAction) => {
            state.totalPage = Math.ceil(action.payload / state.pokePerPage)
        },
        changeCurrentPage: (state, action: PageAction) => {
            state.currentPage = action.payload
        },
    },
})

const pokeCardReducer = pokeCardSlice.reducer

export const { calculaTotalPage, changeCurrentPage } = pokeCardSlice.actions

export const selectPokeCard = (state: RootState) => state.pokeCardReducer

export default pokeCardReducer
