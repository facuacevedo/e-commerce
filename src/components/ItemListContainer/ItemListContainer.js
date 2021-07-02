import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import sushi from '../../img/food/sushi.jpg';
import ramen from '../../img/food/ramen.jpg';
import cafe from '../../img/food/cafe.jpg';
import limonada from '../../img/food/limonada.jpg';
import dango from '../../img/food/dango.png';
import pancakes from '../../img/food/pancakes.png';

const ITEMS = [
    {"id":1,"imgUrl":sushi,"title":"Suhi","price":1000, "categoryId": "comidas", description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {"id":2,"imgUrl":ramen,"title":"Ramen","price":700, "categoryId": "comidas", description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {"id":3,"imgUrl":cafe,"title":"Cafe","price":100, "categoryId": "bebidas", description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},  
    {"id":4,"imgUrl":limonada,"title":"Limonada","price":400, "categoryId": "bebidas", description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},   
    {"id":5,"imgUrl":dango,"title":"Dango","price":800, "categoryId": "postres", description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},   
    {"id":6,"imgUrl":pancakes,"title":"Pancakes","price":300, "categoryId": "postres", description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}   
]

export const ItemListContainer = ({greeting}) => {
    const {id} = useParams();
    //creo un state de items que es un array
    const [items, setItems] = useState([]);

    //creo un efecto para que escuche cualquier cambio en el id
    useEffect(()=>{
        //una promise que crea un array con objetos
        const getItems = () => {
            return id ? ITEMS.filter( (item) => item.categoryId === id ) : ITEMS;
        }
        const items = getItems()
        setItems(items);
    }, [id]);
    
    //luego de que termine ese setTimeOut, "actualizo" el state y lo paso como argumento en ItemList
    
    return (
        <div className="margen">
            <ItemList items={items}/>
        </div>
    )
}
//fw700 es una clase estilo/utilidad 