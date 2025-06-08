import {useReducer, useEffect, useState} from 'react';
import {cartReducer} from './reducers/cartReducer';
import type {Product, CartItem} from './types/types';
import ListaProductos from './components/ListaProductos.tsx';
import CarritoCompras from './components/CarritoCompras.tsx';
import BarraBusqueda from './components/BarraBusqueda.tsx';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Logo from './assets/img/logo.svg'
import CamisaNegra from './assets/img/black-shirt.webp'
import PantalonNegro from './assets/img/pantalonNegro.webp'
import BotasCaqui from './assets/img/caqui-boots.png'
import JacketNegra from './assets/img/leather-jacket.webp'
import GorroOliva from './assets/img/beanie-oliva.webp'
import CamisaRosada from './assets/img/pink-shirt.webp'

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
    {id: '1', nombre: 'Camisa Negra', precio: 25, descripcion: 'Camisa de algodón negra', imagen: CamisaNegra},
    {id: '2', nombre: 'Pantalón Negro', precio: 40, descripcion: 'Pantalón de vestir negro', imagen: PantalonNegro},
    {id: '3', nombre: 'Botas Caqui', precio: 60, descripcion: 'Botas de cuero caqui', imagen: BotasCaqui},
    {id: '4', nombre: 'Jacket Negra', precio: 80, descripcion: 'Jacket de cuero negra', imagen: JacketNegra},
    {id: '5', nombre: 'Gorro Oliva', precio: 15, descripcion: 'Gorro de lana oliva', imagen: GorroOliva},
    {id: '6', nombre: 'Camisa Rosada', precio: 20, descripcion: 'Camisa de algodón rosada', imagen: CamisaRosada}
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
            <div className={`row d-flex justify-content-center align-items-center py-4`}>
                <img src={Logo} alt="logo" width="60" height="60"/>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center py-4">
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
