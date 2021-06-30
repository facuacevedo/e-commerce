import { Fragment, useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import camisa from '../../../img/camisa.jpg';
import '../ItemDetailContainer/ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    useEffect( () => {
        const getItems = () => { return {
                imgUrl:camisa,
                title:"Camisa",
                price:800,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} }
        const items = getItems() ;
        setItem(items);
    }, [])

    return(
        <Fragment >
            <h2 className="centrarTexto subtitulo">Detalles</h2>
            { item === undefined ? false : <ItemDetail item={item}/>}
        </Fragment>
    )
}