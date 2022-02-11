import React, { useEffect, useContext } from 'react'
import { Grid } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectPoke, getPoke, InitialState } from '../../features/pokeSlice'
import {
    selectPokeCard,
    InitialState as InitialStateCard,
} from '../../features/pokeCardSlice'
import PokeList from '../PokeList/PokeList'
import { NameNUrl } from '../../types/types4poke'
import {
    SearchContext,
    SearchContextDefault,
} from '../../contexts/SearchContext'

const PokeContainer = () => {
    const dispatch = useAppDispatch()

    const pokes: InitialState = useAppSelector(selectPoke)
    const pokeCards: InitialStateCard = useAppSelector(selectPokeCard)
    const { searchList } = useContext<SearchContextDefault>(SearchContext)

    // if searchList not empty, it means that the user has searched
    // so we need to set listPoke with the searchList
    // opposite, the pokes.pokemon.results that we get from state reduxPoke is default
    const listPoke: NameNUrl[] =
        searchList.length > 0 ? searchList : pokes.pokemon.results

    const indexLastPoke = pokeCards.currentPage * pokeCards.pokePerPage
    const indexFirstPoke = indexLastPoke - pokeCards.pokePerPage

    const itemsInPage = listPoke.slice(indexFirstPoke, indexLastPoke)

    useEffect(() => {
        dispatch(getPoke())
    }, [dispatch])

    console.log('render pokecontainer')

    return (
        <Grid
            container
            columnSpacing={{ xs: 4, md: 5 }}
            rowSpacing={{ xs: 4, md: 5 }}
        >
            <PokeList list={itemsInPage} />
        </Grid>
    )
}

export default PokeContainer
