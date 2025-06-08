// src/components/BarraBusqueda.tsx
import React, { useState } from 'react'

interface Props {
  onSearchChange: (searchTerm: string) => void
}

const BarraBusqueda: React.FC<Props> = ({ onSearchChange }) => {
  const [search, setSearch] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onSearchChange(value)
  }

  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={search}
      onChange={handleChange}
      className="border p-2 rounded w-full max-w-md my-4"
    />
  )
}

export default BarraBusqueda
