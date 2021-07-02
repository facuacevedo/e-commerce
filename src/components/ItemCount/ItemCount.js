import React, { Fragment, useState } from 'react';
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
        <Fragment className="contenido">
            <div className="contenidoCount">
                <button onClick={() =>{ restarCant() } }>-</button>
                <input type="text" value={add} readOnly/>
                <button onClick={ () => { sumarCant() } }> + </button>
            </div>
            <button onClick={() => {anadirCarrito()}}>Añadir al carrito</button>
        </Fragment>
    )
}