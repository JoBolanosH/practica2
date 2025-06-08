# 🛒 Proyecto Carrito de Compras

Este es un proyecto desarrollado con **React**, **TypeScript** y **Vite**, que implementa un carrito de compras con gestión de estado usando `useReducer`, efectos secundarios con `useEffect`, manejo de estado simple con `useState`, y búsqueda de productos. El estado del carrito se guarda y se recupera automáticamente desde `localStorage`.

## 🚀 Instalación

Asegúrate de tener **Node.js** y **Yarn** instalados.

```bash
yarn install
yarn dev
```

Esto ejecutará el proyecto en desarrollo. Por defecto, se abrirá en `http://localhost:5173`.

## 🧩 Estructura del Proyecto

```
src/
├── assets/
│   ├── img/
├── components/
│   ├── BarraBusqueda.tsx
│   ├── CarritoCompras.tsx
│   ├── ListaProductos.tsx
│   └── TarjetaProducto.tsx
├── reducers/
│   └── cartReducer.ts
├── styles/
│   └── CarritoCompras.css
├── types/
│   └── types.ts
├── App.tsx
└── main.tsx
```

## 🧠 Hooks Utilizados

### 🧷 `useState`
- Se utiliza para manejar:
    - El término de búsqueda en la barra.
    - El estado interno del input en la barra de búsqueda.

### 🔁 `useEffect`
- Se utiliza para:
    - Guardar el estado del carrito en `localStorage` cada vez que cambia.
    - Recuperar el carrito desde `localStorage` al cargar la app.

### 🔄 `useReducer`
- Maneja el estado del carrito de forma centralizada.
- Acciones soportadas:
    - `ADD_ITEM`: Añade un producto o incrementa su cantidad.
    - `REMOVE_ITEM`: Elimina un producto del carrito.
    - `UPDATE_QUANTITY`: Cambia la cantidad o elimina el producto si la cantidad es 0.

## 🧪 Funcionalidades

✅ Visualización de productos  
✅ Añadir productos al carrito  
✅ Incrementar o disminuir cantidades  
✅ Eliminar productos del carrito  
✅ Cálculo del total del carrito  
✅ Persistencia del carrito en `localStorage`  
✅ Búsqueda de productos por nombre

## 📦 Tipos TypeScript Definidos

### `Producto`
```ts
interface Producto {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen?: string;
}
```

### `ItemCarrito`
```ts
interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}
```

### `AccionCarrito`
```ts
type TipoAccionCarrito = 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY';

type AccionCarrito =
  | { type: 'ADD_ITEM'; payload: Producto }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } };
```

## 🖥️ Componentes

- **`ListaProductos`**: Muestra productos usando `TarjetaProducto`.
- **`TarjetaProducto`**: Renderiza la información de cada producto y botón para añadir.
- **`CarritoCompras`**: Muestra los productos añadidos con botones para modificar cantidad o eliminar.
- **`BarraBusqueda`**: Input que permite filtrar productos por nombre.

## 💾 Persistencia

El carrito se guarda en `localStorage` y se carga automáticamente al iniciar la app. Se puede implementar con lazy loading o en el estado inicial del reducer.

---

👨‍💻 Desarrollado como parte del curso **Desarrollo Web con React y Ruby on Rails**