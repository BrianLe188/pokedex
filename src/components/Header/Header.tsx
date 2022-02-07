import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    CardMedia,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../data/img/mainlogo.png'
import { Link } from 'react-router-dom'

interface Title {
    title: string
    route: string
}

const headerTitle: Title[] = [
    {
        title: 'Home',
        route: '/',
    },
    {
        title: 'Detail',
        route: 'detail',
    },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleCloseMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Link to="/">
                        <CardMedia
                            component="img"
                            src={logo}
                            sx={{
                                width: '100px',
                            }}
                        />
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        mx: 5,
                    }}
                >
                    {headerTitle.map(item => (
                        <Link
                            to={item.route}
                            key={item.title}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Button
                                sx={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                }}
                            >
                                {item.title}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton>
                        <IconButton
                            sx={{ color: '#fff' }}
                            onClick={handleOpenMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu open={isOpen} onClose={handleCloseMenu}>
                            {headerTitle.map(item => (
                                <Link
                                    to={item.route}
                                    key={item.title}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <MenuItem onClick={handleCloseMenu}>
                                        <Typography
                                            sx={{
                                                color: '#000',
                                                fontWeight: 'bold',
                                            }}
                                            textAlign="center"
                                        >
                                            {item.title}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Link to="/">
                        <CardMedia
                            component="img"
                            src={logo}
                            sx={{
                                width: '100px',
                            }}
                        />
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
