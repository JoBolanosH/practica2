import {useReducer, useEffect, useState} from 'react';
import {cartReducer} from './reducers/cartReducer';
import type {Product, CartItem} from './types/types';
import ListaProductos from './components/ListaProductos.tsx';
import CarritoCompras from './components/CarritoCompras.tsx';
import BarraBusqueda from './components/BarraBusqueda.tsx';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import CamisaBlanca from './assets/camisaBlanca.png'
import PantalonNegro from './assets/pantalonNegro.webp'
import ZapatosMarrones from './assets/zapatosMarrones.jpg'
import JacketAzul from './assets/jacketAzul.webp'

AOS.init({})

const initialCart = (): CartItem[] => {
    const stored = localStorage.getItem('cart');
    try {
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const mockProductos: Product[] = [
    {id: '1', nombre: 'Camisa Blanca', precio: 25, descripcion: 'Camisa de algodón blanca', imagen: CamisaBlanca},
    {id: '2', nombre: 'Pantalón Negro', precio: 40, descripcion: 'Pantalón elegante negro', imagen: PantalonNegro},
    {id: '3', nombre: 'Zapatos Marrones', precio: 60, descripcion: 'Zapatos de cuero marrón', imagen: ZapatosMarrones},
    {id: '4', nombre: 'Jacket Azul', precio: 80, descripcion: 'Jacket tipo denim azul', imagen: JacketAzul},
    {id: '3', nombre: 'Zapatos Marrones', precio: 60, descripcion: 'Zapatos de cuero marrón', imagen: ZapatosMarrones},
    {id: '4', nombre: 'Jacket Azul', precio: 80, descripcion: 'Jacket tipo denim azul', imagen: JacketAzul}
];

function App() {
    const [cartState, dispatch] = useReducer(cartReducer, [], initialCart);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState));
    }, [cartState]);

    const handleAddToCart = (product: Product) => {
        dispatch({type: 'ADD_ITEM', payload: product});
    };

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
    };

    const productosFiltrados = mockProductos.filter(p =>
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid h-100 bg-style">
            <div className="row">
                <div className="col-12">
                    <BarraBusqueda onSearchChange={handleSearchChange}/>
                </div>
            </div>
            <div data-aos="zoom-in" className="row d-flex justify-content-center align-items-center">
                <ListaProductos productos={productosFiltrados} onAddToCart={handleAddToCart} />
            </div>
            <div className={`row`}>
                <div className="col-md-4">
                    <CarritoCompras items={cartState} dispatch={dispatch}/>
                </div>
            </div>
        </div>
    );
}

export default App;