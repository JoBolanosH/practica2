// src/components/ListaProductos.tsx
import React from 'react'
import type { Product } from '../types/types'
import TarjetaProducto from './TarjetaProducto'

interface Props {
    productos: Product[]
    onAddToCart: (producto: Product) => void
}

const ListaProductos: React.FC<Props> = ({ productos, onAddToCart }) => {
    return (
            <div className={`row`}>
                {productos.map(producto => (
                    <div className="col-md-4 col-lg-2 d-flex justify-content-center align-items-center mb-3" key={producto.id}>
                        <TarjetaProducto producto={producto} onAddToCart={onAddToCart} />
                    </div>
                ))}
            </div>
    )
}

export default ListaProductos
