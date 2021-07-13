import "./ItemDetail.css"
import { NavLink } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { Fragment, useState, useContext} from "react";
import { CartContext  } from '../../Context/CartContext';

export const ItemDetail = ({ item }) => {
    const [{ title, price, description, imgUrl }] = item;
    const [ count, setCount ] = useState(0)
    const [ compra, setCompra ] = useState();
    const { addItem, removeItem } = useContext(CartContext);

    console.log("quantity", count);

    const onAdd =  (quantity)=> {
        setCount(quantity);
        setCompra(1);
        addItem(item,quantity);
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
                <ItemCount stock="10" initial="1" onAdd= { onAdd } />}
            </Fragment>
            <button onClick={ () => removeItem( item[0].id) } >Quitar item del carrito</button>
        </div>
    )
}