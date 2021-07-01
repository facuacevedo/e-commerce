import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    //destructuring del item, es un objeto
    const {id, title, price, description, imgUrl} = item;

    const agregar = () =>{
        alert("Añadido al carrito");
    }
    
    return (
        //recibe el parametro por el "id"
        <Link to={`/item/${id}`}>
                    <article id={id} className="producto">
                        <p className="producto-titulo">{title}</p>
                        <img src={imgUrl} alt="imagen"></img>
                        <p className="producto-precio">{price}</p>
                        <p className="producto-descripcion">{description}</p>
                    <button onClick={agregar} >Añadir al carrito</button>
                </article>
        </Link>
    )
}