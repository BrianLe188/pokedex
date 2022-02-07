import React from 'react'
import SearchField from '../../components/Search/SearchFeild'
import PokeContainer from '../../components/PokeContainer/PokeContainer'
import PaginationComponent from '../../components/Pagination/Pagination'
import { Grid, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
    selectPokeCard,
    calculaTotalPage,
    changeCurrentPage,
} from '../../features/pokeCardSlice'
import { selectPoke, searchPoke, getPoke } from '../../features/pokeSlice'
import { Outlet } from 'react-router-dom'
import ModalProvider from '../../contexts/ModalContext'

const Home = () => {
    const dispatch = useAppDispatch()

    const pokes = useAppSelector(selectPoke)
    const pokeCards = useAppSelector(selectPokeCard)

    dispatch(calculaTotalPage(pokes.pokemon.results.length))

    const handleSubmitInput = (value: string) => {
        if (value === '') {
            dispatch(getPoke())
        }
        dispatch(searchPoke(value))
    }

    const handleChangePage = (page: number) => {
        dispatch(changeCurrentPage(page))
    }

    return (
        <>
            <ModalProvider>
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <SearchField handleSubmitInput={handleSubmitInput} />
                    </Grid>
                    <Grid
                        item
                        sx={{ display: 'flex' }}
                        xs={12}
                        md={5}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography
                            sx={{ fontSize: { xs: '15px', md: '20px' } }}
                            fontWeight="bold"
                        >
                            Search any Pokemon that you want...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} pt={{ xs: 2, md: 3 }}>
                        <PokeContainer />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        py={{ xs: 2, md: 3 }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <PaginationComponent
                            total={pokeCards.totalPage}
                            changePage={handleChangePage}
                        />
                    </Grid>
                </Grid>
                <Outlet />
            </ModalProvider>
        </>
    )
}

export default Home
