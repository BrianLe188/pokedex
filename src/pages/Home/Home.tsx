import React, { useContext, useLayoutEffect } from 'react'
import SearchContainer from '../../components/SearchContainer/SearchContainer'
import PokeContainer from '../../components/PokeContainer/PokeContainer'
import PaginationComponent from '../../components/Pagination/Pagination'
import { Grid, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
    selectPokeCard,
    calculaTotalPage,
    changeCurrentPage,
    InitialState as InitialStateCard,
} from '../../features/pokeCardSlice'
import { selectPoke, InitialState } from '../../features/pokeSlice'
import { Outlet } from 'react-router-dom'
import ModalProvider from '../../contexts/ModalContext'
import SearchProvide, { SearchContext } from '../../contexts/SearchContext'

const Home = () => {
    const dispatch = useAppDispatch()

    const pokes: InitialState = useAppSelector(selectPoke)
    const { searchList } = useContext(SearchContext)
    const pokeCards: InitialStateCard = useAppSelector(selectPokeCard)

    useLayoutEffect(() => {
        dispatch(
            calculaTotalPage(
                searchList.length > 0
                    ? searchList.length
                    : pokes.pokemon.results.length
            )
        )
    }, [])

    const handleChangePage = (page: number) => {
        dispatch(changeCurrentPage(page))
    }

    return (
        <>
            <SearchProvide>
                <ModalProvider>
                    <Grid container>
                        <SearchContainer />
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
            </SearchProvide>
        </>
    )
}

export default Home
