interface Product{
    id: string
    nombre: string
    precio: number
    descripcion: string
    imagen?: string
}

interface CartItem{
    product: Product
    cantidad: number
}

type CartActionType = 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY';


type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } };

export type {Product, CartItem, CartActionType, CartAction}
