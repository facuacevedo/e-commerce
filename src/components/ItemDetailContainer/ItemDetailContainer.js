import { Fragment, useEffect, useState } from "react";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

import sushi from '../../img/food/sushi.jpg';
import ramen from '../../img/food/ramen.jpg';
import cafe from '../../img/food/cafe.jpg';
import limonada from '../../img/food/limonada.jpg';
import dango from '../../img/food/dango.png';
import pancakes from '../../img/food/pancakes.png';

const ITEMS = [
    {id:"1",imgUrl:sushi,title:"Suhi",price:1000, categoryId: "comidas",description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:"2",imgUrl:ramen,title:"Ramen",price:700, categoryId: "comidas",description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:"3",imgUrl:cafe,title:"Cafe",price:100, categoryId: "bebidas",description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},  
    {id:"4",imgUrl:limonada,title:"Limonada",price:400, categoryId: "bebidas",description:"t is a long fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:"5",imgUrl:dango,title:"Dango",price:800, categoryId: "postres",description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},   
    {id:"6",imgUrl:pancakes,title:"Pancakes",price:300, categoryId: "postres",description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}   
]

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState();

    useEffect( () => {
        const getItems = () => {
            return ITEMS.filter( (item) => item.id === id);
        }
        const items = getItems() ;
        /* console.log(items); */
        setItem(items);
    }, [id])

    /* console.log("item",item); */
    return(
        <Fragment >
            <h2 className="centrarTexto subtitulo">Detalles</h2>
            { item ? <ItemDetail item={ item }/> : <p>Cargando...</p> }
        </Fragment>
    )
}