import React, { useContext } from 'react'
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Box,
    Typography,
} from '@mui/material'
import { Type } from '../../types/types4poke'
import errorImg from '../../assets/img/error.png'
import { Link } from 'react-router-dom'
import { ModalContext, ModalContextDefault } from '../../contexts/ModalContext'

interface PokeCardProps {
    id: number
    name: string
    img: string
    types: Type[]
}

const PokeCard = ({ id, name, img, types }: PokeCardProps) => {
    const { handleOpenModal } = useContext<ModalContextDefault>(ModalContext)

    console.log('render PokeCard')

    return (
        <>
            <Grid item xs={6} md={3}>
                <Link
                    to={`${id}`}
                    style={{ textDecoration: 'none' }}
                    onClick={() => handleOpenModal(id)}
                >
                    <Card sx={{ border: '1px solid' }}>
                        {img ? (
                            <CardMedia
                                component="img"
                                image={img}
                                alt="pokemon thumbnail"
                                sx={{ width: '100%' }}
                            />
                        ) : (
                            <CardMedia
                                component="img"
                                image={errorImg}
                                alt="can't load image"
                                sx={{ width: '100%' }}
                            />
                        )}
                        <CardContent>
                            <Box>
                                <Typography
                                    paragraph
                                    sx={{
                                        fontSize: '15px',
                                    }}
                                >
                                    ID: {id}
                                </Typography>
                                <Typography
                                    paragraph
                                    fontWeight="bold"
                                    noWrap
                                    sx={{
                                        fontSize: {
                                            xs: '15px',
                                            md: '20px',
                                        },
                                    }}
                                >
                                    {name}
                                </Typography>
                            </Box>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="space-evenly"
                                pt={{ xs: 1, md: 2 }}
                            >
                                {types.map(type => (
                                    <Grid item xs={6}>
                                        <Box
                                            component="button"
                                            sx={{
                                                borderRadius: '10px',
                                                border: 'none',
                                            }}
                                            py={{ xs: 0, md: 1 }}
                                            px={{ xs: 1, md: 3 }}
                                        >
                                            <Typography>
                                                {type.type.name}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        </>
    )
}

export default PokeCard
