import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    //destructuring del item, es un objeto
    const { itemId, title, price, imgUrl } = item;
    
    return (
        //recibe el parametro por el "id"
            <div className="itemContenedor" >
                <Link to={`/item/${itemId}`}>
                    <article id={itemId} className="producto">
                                <p className="producto-titulo">{title}</p>
                                <img src={imgUrl} alt="imagen"></img>
                                <p className="producto-precio">${price}</p>
                    </article>
                </Link>
            </div>
    )
}