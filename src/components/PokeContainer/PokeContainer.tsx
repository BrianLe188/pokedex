import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectPoke, getPoke } from '../../features/pokeSlice'
import { selectPokeCard } from '../../features/pokeCardSlice'
import PokeList from '../PokeList/PokeList'

const PokeContainer = () => {
    const dispatch = useAppDispatch()

    const pokes = useAppSelector(selectPoke)
    const pokeCards = useAppSelector(selectPokeCard)

    const indexLastPoke = pokeCards.currentPage * pokeCards.pokePerPage
    const indexFirstPoke = indexLastPoke - pokeCards.pokePerPage

    const itemsInPage = pokes.pokemon.results.slice(
        indexFirstPoke,
        indexLastPoke
    )

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
