import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ModalInfo from '../ModalInfo/ModalInfo'
import { Modal } from '@mui/material'
// import { useParams } from 'react-router-dom'
import { Pokeapi } from '../../apis/pokeapi'
import { Pokemon } from '../../types/types4poke'
import { Species, FlavorText } from '../../types/types4species'
import { ModalContext, ModalContextDefault } from '../../contexts/ModalContext'

const ModalContainer = () => {
    // const { id } = useParams()

    const { pokeID, isOpen, handleCloseModal } =
        useContext<ModalContextDefault>(ModalContext)

    const [currentPoke, setCurrentPoke] = useState({} as Pokemon)
    const [currentSpecies, setCurrentSpecies] = useState({} as Species)

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const requestPoke = `${Pokeapi.pokemon}${pokeID}`
                const responsePoke = await axios.get<Pokemon>(requestPoke)
                setCurrentPoke(responsePoke.data)
                try {
                    const requestSpecies = `${Pokeapi.pokemonSpecies}${pokeID}`
                    const responseSpecies = await axios.get<Species>(
                        requestSpecies
                    )
                    setCurrentSpecies(responseSpecies.data)
                } catch (error) {
                    console.log(error)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchInfo()
    }, [pokeID])

    const flavorTextEN = currentSpecies.flavor_text_entries?.filter(
        item => item.language.name === 'en'
    ) as FlavorText[]

    console.log('Modal render')

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalInfo
                    id={currentPoke.id}
                    name={currentPoke.name}
                    image={
                        currentPoke.sprites?.other['official-artwork']
                            .front_default
                    }
                    flavorText={
                        flavorTextEN
                            ? flavorTextEN[
                                  Math.floor(
                                      Math.random() * flavorTextEN.length
                                  )
                              ]
                            : ({} as FlavorText)
                    }
                    stats={currentPoke.stats}
                />
            </Modal>
        </div>
    )
}

export default ModalContainer
