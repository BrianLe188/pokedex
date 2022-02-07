import React from 'react'
import {
    Modal,
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Container,
} from '@mui/material'
import { FlavorText } from '../../types/types4species'
import StatProgress from '../StatProgress/StatProgress'
import { Stat } from '../../types/types4poke'

interface ModalInfoProps {
    id: number
    name: string
    image: string
    flavorText: FlavorText
    stats: Stat[]
}

const boxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80%', md: '50%' },
    height: { xs: '60%' },
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    overflow: 'scroll',
}

const ModalInfo = ({ id, name, image, flavorText, stats }: ModalInfoProps) => {
    console.log('modalinfo render')

    return (
        <Box sx={boxStyle}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={image}
                            sx={{ width: '100%' }}
                            alt="pokemon image"
                        />
                        <CardContent>
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
                                sx={{ fontSize: { xs: '15px', md: '20px' } }}
                                fontWeight="bold"
                            >
                                {name}
                            </Typography>
                            <Typography paragraph>
                                {flavorText.flavor_text}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Container fixed>
                        <Grid item xs={12} py={1}>
                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent="space-evenly"
                            >
                                {stats?.map(item => (
                                    <Grid item xs={12}>
                                        <StatProgress
                                            name={item.stat.name}
                                            baseStat={item.base_stat}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} py={1}>
                            this is bottom
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ModalInfo
