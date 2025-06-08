// src/components/BarraBusqueda.tsx
import {InputAdornment, TextField} from '@mui/material'
import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    onSearchChange: (searchTerm: string) => void
}

const BarraBusqueda: React.FC<Props> = ({onSearchChange}) => {
    const [search, setSearch] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
        onSearchChange(value)
    }

    return (
        <TextField
            id="input-with-icon-adornment"
            label={`Buscar producto...`}
            value={search}
            onChange={handleChange}
            variant="outlined"
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    )
                }
            }}
        />
    )
}

export default BarraBusqueda
