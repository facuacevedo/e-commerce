import React, { useState } from 'react';
import "./ItemCount.css";

export const ItemCount = ({stock, initial, onAdd}) => {
    let inicial = Number(initial);
    const [add, setAdd] = useState(inicial);

    
    function cantidad(){
        const evaluar = (add < inicial || add >= stock || stock == null  ) ? false : setAdd(add + 1);
        return evaluar;
    }
    function restar(){
        const evaluar = (add <= inicial || add > stock || stock == null ) ? false : setAdd( add - 1);
        return evaluar;
    }

    return (
        <div className="contenido">
            <h3 className="centrarTexto">Producto</h3>

            <div className="contenidoCount">
            <button onClick={ () => { cantidad () } }> + </button>
            <input type="number" value={add} readOnly />
            <button onClick={() =>{ restar() } }>-</button>
            </div>
            <button onClick={onAdd}>Añadir al carrito</button>
        </div>
    )
}