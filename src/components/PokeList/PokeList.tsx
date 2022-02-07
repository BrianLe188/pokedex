import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pokemon, NameNUrl } from '../../types/types4poke'
import PokeCard from '../PokeCard/PokeCard'

interface PokeListProps {
    list: NameNUrl[]
}

const PokeList = ({ list }: PokeListProps) => {
    const [infoList, setInfoList] = useState<Pokemon[]>([])

    const fetchInfo = (array: NameNUrl[]) => {
        array.forEach(async item => {
            try {
                const response = await axios.get(item.url)
                const data: Pokemon = response.data
                setInfoList(currentList => [...currentList, data])
            } catch (error) {
                console.log(error)
            }
        })
    }
    console.log('list', infoList)

    useEffect(() => {
        setInfoList([])
        fetchInfo(list)
    }, [list])

    return (
        <>
            {infoList
                // to fix render item is not in the right order (bug)
                // use sort all pokemon's id in list so this list can render right order
                .sort((prev, next) => prev.id - next.id)
                .map(item => (
                    <PokeCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={
                            item.sprites.other['official-artwork'].front_default
                        }
                        types={item.types}
                    />
                ))}
        </>
    )
}

export default PokeList
