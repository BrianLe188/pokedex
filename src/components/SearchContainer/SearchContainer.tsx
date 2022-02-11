import React, { useContext } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectPoke, InitialState } from '../../features/pokeSlice'
import { Grid } from '@mui/material'
import SearchField from '../SearchFeild/SearchFeild'
import {
    SearchContext,
    SearchContextDefault,
} from '../../contexts/SearchContext'

const SearchContainer = () => {
    const pokes: InitialState = useAppSelector(selectPoke)

    const { handleSearch } = useContext<SearchContextDefault>(SearchContext)

    // passing the function to the SearchField component to be called when
    // submit function in SearchFeild is called
    const handleSubmit = (input: string) => {
        handleSearch(pokes.pokemon.results, input)
    }

    return (
        <Grid item xs={12} md={7}>
            <SearchField handleSubmitInput={handleSubmit} />
        </Grid>
    )
}

export default SearchContainer
