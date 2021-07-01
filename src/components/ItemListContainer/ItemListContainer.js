import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList/ItemList';
import camisa from '../../img/camisa.jpg';
import remera from '../../img/remera.jpg';
import sweater from '../../img/sweater.jpg';
import { Item } from './ItemList/Item';

const Items = [
    {id:1,imgUrl:remera,title:"Remera",price:500, categoryId: "remeras"},
    {id:2,imgUrl:sweater,title:"Sweater",price:700, categoryId: "sweater"},
    {id:3,imgUrl:camisa,title:"Camisa",price:800, categoryId: "camisa"}
]

export const ItemListContainer = ({greeting}) => {
    const {id} = useParams();
    //creo un state de items que es un array
    const [items, setItems] = useState([]);

    //creo un efecto para que escuche cualquier cambio en el id
    useEffect(()=>{
        //una promise que crea un array con objetos
        const getItems = () => {
            return id ? Items.filter( (item) => item.categoryId === id ) : Item ;
        }
        getItems.then((itemList)=>{
            setItems(itemList);
        })
    }, [id]);
    
    //luego de que termine ese setTimeOut, "actualizo" el state y lo paso como argumento en ItemList
    
    return (
        <div className="margen">
            <ItemList items={items}/>
        </div>
    )
}
//fw700 es una clase estilo/utilidad 