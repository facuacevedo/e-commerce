import './ItemList.css';
import {Item} from '../Item/Item';

//creo un ternario, si la prop items es 0 paso el valor "cargando", sino creo un carray nuevo con cada valor de Item

export const ItemList = ({items}) => {

    return(
        <div className="lista seccion">
            {items.length === 0 ? <p>Cargando...</p> :
                (items.map((item) => {
                        return <Item key = {item.itemId} item={item} />
                        }
                        )
                    )
                }
        </div>
    )
}
