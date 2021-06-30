import React, { useState } from 'react';
import "./ItemCount.css";

export const ItemCount = ({stock, initial, onAdd}) => {
    let inicial = Number(initial);
    const [add, setAdd] = useState(inicial);
    
    const sumarCant = () => {
        const evaluar = (add < inicial || add >= stock || stock == null  ) ? false : setAdd(add + 1);
        return evaluar;
    } 
    const restarCant = () => {
        const evaluar = (add <= inicial || add > stock || stock == null ) ? false : setAdd( add - 1);
        return evaluar;
    }
    const anadirCarrito = () => {
        alert(`Añadiste la cantidad de ${add} al carrito`);
    }

    return (
        <div className="contenido">
            <h3 className="centrarTexto">Producto</h3>

            <div className="contenidoCount">
            <button onClick={ () => { sumarCant() } }> + </button>
            <input type="number" value={add} readOnly/>
            <button onClick={() =>{ restarCant() } }>-</button>
            </div>
            <button onClick={() => {anadirCarrito()}}>Añadir al carrito</button>
        </div>
    )
}