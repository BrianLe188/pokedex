import { createContext, useState } from 'react'

export interface ModalContextDefault {
    pokeID: number
    isOpen: boolean
    handleOpenModal: (id: number) => void
    handleCloseModal: () => void
}

const isOpenModal: ModalContextDefault = {
    pokeID: 0,
    isOpen: false,
    handleOpenModal: (id: number) => null,
    handleCloseModal: () => null,
}

export const ModalContext = createContext<ModalContextDefault>(isOpenModal)

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(isOpenModal.isOpen)
    const [pokeID, setPokeID] = useState<number>(isOpenModal.pokeID)

    const handleOpenModal = (id: number) => {
        if (typeof id === 'number') setPokeID(id)
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const value = {
        pokeID,
        isOpen,
        handleOpenModal,
        handleCloseModal,
    }

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
}

export default ModalProvider
