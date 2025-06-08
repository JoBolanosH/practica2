// src/reducers/cartReducer.ts

import type { CartItem, CartAction } from '../types/types'

export const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    
  switch (action.type) {
    case 'ADD_ITEM': {
      const producto = action.payload;
      const existente = state.find(item => item.product.id === producto.id);

      if (existente) {
        // Incrementar cantidad
        return state.map(item =>
          item.product.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Agregar nuevo producto con cantidad: 1
        return [...state, { product: producto, cantidad: 1 }];
      }
    }

    case 'REMOVE_ITEM': {
      const id = action.payload;
      return state.filter(item => item.product.id !== id);
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      return state
        .map(item =>
          item.product.id === productId ? { ...item, cantidad: quantity } : item
        )
        .filter(item => item.cantidad > 0);
    }

    default:
      return state;
  }
};
