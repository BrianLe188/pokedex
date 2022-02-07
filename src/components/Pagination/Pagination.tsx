import React from 'react'
import { Stack, Pagination } from '@mui/material'

interface PaginationComponentProps {
    total: number
    changePage: (page: number) => void
}

const PaginationComponent = ({
    total,
    changePage,
}: PaginationComponentProps) => {
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        changePage(page)
    }

    return (
        <Stack spacing={2}>
            <Pagination
                count={total}
                defaultPage={1}
                color="primary"
                size="small"
                showFirstButton
                showLastButton
                onChange={handleChange}
            />
        </Stack>
    )
}

export default PaginationComponent
