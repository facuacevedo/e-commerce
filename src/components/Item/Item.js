import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    //destructuring del item, es un objeto
    const {id, title, price, imgUrl} = item;
    
    return (
        //recibe el parametro por el "id"
            <div >
                <Link to={`/item/${id}`}>
                    <article id={id} className="producto">
                                <p className="producto-titulo">{title}</p>
                                <img src={imgUrl} alt="imagen"></img>
                                <p className="producto-precio">${price}</p>
                    </article>
                </Link>
            </div>
    )
}