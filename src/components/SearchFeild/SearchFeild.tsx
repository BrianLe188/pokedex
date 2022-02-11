import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
    SearchContext,
    SearchContextDefault,
} from '../../contexts/SearchContext'

interface SearchFieldProps {
    handleSubmitInput?: (value: string) => void
}

const Search = styled('form')(({ theme }: { theme: Theme }) => ({
    width: '100%',
    borderRadius: '20px',
    border: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
}))

const SearchInput = styled('input')(({ theme }: { theme: Theme }) => ({
    padding: '10px',
    width: '90%',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
}))

const SearchField = ({ handleSubmitInput }: SearchFieldProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [input, setInput] = useState<string>('')

    const handleFocusInput = () => {
        setIsFocus(!isFocus)
    }

    const handleCloseInput = () => {
        setIsFocus(false)
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (handleSubmitInput !== undefined) handleSubmitInput(input)
    }

    return (
        <Search
            sx={isFocus ? { boxShadow: '0 0 5px 1px #1976d2' } : {}}
            onSubmit={handleSubmit}
        >
            <SearchIcon fontSize="large" sx={{ p: 1 }} />
            <SearchInput
                placeholder="Enter Pokemon's name"
                sx={{ p: 0 }}
                value={input}
                onFocus={handleFocusInput}
                onBlur={handleCloseInput}
                onChange={handleChangeInput}
            />
        </Search>
    )
}

export default SearchField
