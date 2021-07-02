import "./ItemDetail.css"
import {ItemCount} from '../ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {
    const {title, price, description, imgUrl} = item[0];
    const agregar = () =>{
        alert("Añadido al carrito");
    }

    return (
        <div className="contenidoItem ">
            <h3>{title}</h3>
            <p className="fw700">${price}</p>
            <img src={imgUrl} alt="imagen producto" />
            <p>{description}</p>
            <ItemCount stock="10" initial="1" onAdd={agregar}/>
        </div>
    )
}