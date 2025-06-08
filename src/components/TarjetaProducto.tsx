// src/components/TarjetaProducto.tsx
import React from 'react'
import type {Product} from '../types/types'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'

interface Props {
    producto: Product
    onAddToCart: (producto: Product) => void
}

const TarjetaProducto: React.FC<Props> = ({producto, onAddToCart}) => {
    return (
        <>
            <Card sx={{maxWidth: 300, maxHeight: 300, minWidth: 300, minHeight: 300}} className={'shadow-lg rounded-3 d-flex justify-content-center align-items-center flex-column'}>
                <CardMedia
                    sx={{
                        height: 120,
                        width: 120,
                        objectFit: 'contain',
                        mx: 'auto',
                        mt: 2,
                    }}
                    image={producto.imagen}
                    title={producto.nombre}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.nombre}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {producto.descripcion}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className="d-flex justify-content-start align-items-center mx-2 mb-4 gap-2">
                        <Typography variant="body2" color="text.secondary">
                            ${producto.precio.toFixed(2)}
                        </Typography>
                        <Button size="small" variant="outlined" onClick={() => onAddToCart(producto)}>
                            Añadir al Carrito
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </>

    )
}

export default TarjetaProducto
