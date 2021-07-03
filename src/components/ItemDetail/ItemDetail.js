import "./ItemDetail.css"
import { NavLink } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { Fragment, useState } from "react";

export const ItemDetail = ({ item }) => {
    const [{ title, price, description, imgUrl }] = item;
    const [ compra, setCompra ] = useState();

    const finalizarCompra = () =>{
        alert("Añadiste este producto al carrito");
        setCompra(1);
    }
    
    return (
        <div className="contenidoItem ">
            <h3>{title}</h3>
            <p className="fw700">${price}</p>
            <img src={imgUrl} alt="imagen producto" />
            <p>{description}</p>
            <Fragment>
                {compra ?
                <NavLink to="/cart"><button>Termina tu compra</button></NavLink>:
                <ItemCount stock="10" initial="1" onAdd= { finalizarCompra } />}
            </Fragment>
        </div>
    )
}