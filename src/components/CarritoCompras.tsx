// src/components/CarritoCompras.tsx
import React, {useState} from 'react'
import type {CartItem, CartAction} from '../types/types'
import {Box, Button, ButtonGroup, IconButton, Modal} from '@mui/material'
import {styled} from '@mui/material/styles';
import Badge, {badgeClasses} from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../styles/CarritoCompras.css'

interface Props {
    items: CartItem[]
    dispatch: React.Dispatch<CartAction>
}

const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
    }
`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const CarritoCompras: React.FC<Props> = ({items, dispatch}) => {

    const [openModal, setOpenModal] = useState(false);


    const calcularTotal = () =>
        items.reduce((acc, item) => acc + item.product.precio * item.cantidad, 0)

    return (
        <>
            <div className={`icon-style`}>
                <IconButton onClick={() => setOpenModal(true)}>
                    <ShoppingCartIcon/>
                    <CartBadge badgeContent={items.length} color="primary" overlap="circular"/>
                </IconButton>
            </div>
            <div>
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className={`rounded-3 shadow-lg`}>
                        <h2 className="text-xl font-bold mb-2">Carrito de Compras</h2>
                        {items.length === 0 ? (
                            <p className="text-gray-600">El carrito está vacío.</p>
                        ) : (
                            <ul className="space-y-3">
                                {items.map(({product, cantidad}) => (
                                    <li key={product.id} className="border-b pb-2">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-semibold">{product.nombre}</p>
                                                <p className="text-sm text-gray-700">
                                                    ${product.precio.toFixed(2)} x {cantidad} = $
                                                    {(product.precio * cantidad).toFixed(2)}
                                                </p>
                                            </div>
                                            <ButtonGroup color="secondary" aria-label="Medium-sized button group">
                                                <Button key="add" onClick={() =>
                                                    dispatch({
                                                        type: 'UPDATE_QUANTITY',
                                                        payload: {productId: product.id, quantity: cantidad - 1},
                                                    })
                                                }>-</Button>
                                                <Button key="substract" onClick={() =>
                                                    dispatch({
                                                        type: 'UPDATE_QUANTITY',
                                                        payload: {productId: product.id, quantity: cantidad + 1},
                                                    })
                                                }>+</Button>
                                                <Button key="delete" onClick={() => dispatch({
                                                    type: 'REMOVE_ITEM',
                                                    payload: product.id
                                                })}>🗑</Button>
                                            </ButtonGroup>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <hr className="my-4"/>
                        <p className="text-right font-semibold">
                            Total: ${calcularTotal().toFixed(2)}
                        </p>
                    </Box>
                </Modal>
            </div>
        </>
    );
}

export default CarritoCompras
