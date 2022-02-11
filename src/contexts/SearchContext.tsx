import { createContext, useState } from 'react'
import { NameNUrl } from '../types/types4poke'

export interface SearchContextDefault {
    searchList: NameNUrl[]
    handleSearch: (list: NameNUrl[], input: string) => void
}

const searchDefault: SearchContextDefault = {
    searchList: [],
    handleSearch: (list: NameNUrl[], input: string) => null,
}

export const SearchContext = createContext<SearchContextDefault>(searchDefault)

const SearchProvide = ({ children }: { children: React.ReactNode }) => {
    // this searchList will be used to store the list of pokemon that searched
    // and use it to render Card
    const [searchList, setSearchList] = useState<NameNUrl[]>(
        searchDefault.searchList
    )

    // take the list of pokemon in state reduxPoke and input as parameter
    // filter the list and return the list of pokemon that match the input
    // and setSearchList to the new list
    const handleSearch = (list: NameNUrl[], input: string) => {
        const result: NameNUrl[] = list.filter(item =>
            item.name.toLowerCase().includes(input.toLowerCase())
        )
        setSearchList(result)
    }

    const value: SearchContextDefault = {
        searchList,
        handleSearch,
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvide
