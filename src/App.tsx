import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import { Container } from '@mui/material'
import ModalContainer from './components/ModalContainer/ModalContainer'

function App() {
    return (
        <div className="App">
            <Header />
            <Container maxWidth="lg" sx={{ mt: 10 }}>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path=":id" element={<ModalContainer />} />
                    </Route>
                    <Route path="detail" element={<Detail />} />
                </Routes>
            </Container>
        </div>
    )
}

export default App
