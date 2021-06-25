import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { ItemList } from './ItemList/ItemList';
import camisa from '../../img/camisa.jpg';
import remera from '../../img/remera.jpg';
import sweater from '../../img/sweater.jpg';

export const ItemListContainer = ({greeting}) => {
    //creo un state de items que es un array
    const [items, setItems] = useState([]);
    //creo un efecto para que escuche cualquier cambio
    useEffect(()=>{
        //una promise que crea un array con objetos
        const getItems = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve([
                    {id:1,imgUrl:remera,title:"Remera",price:500},
                    {id:2,imgUrl:sweater,title:"Sweater",price:700},
                    {id:3,imgUrl:camisa,title:"Camisa",price:800}
                ])
                console.log("termino")
            }, 2500)
        });
        getItems.then((itemList)=>{
            setItems(itemList);
        })
    }, []);
    
    //luego de que termine ese setTimeOut, "actualizo" el state y lo paso como argumento en ItemList
    
    return (
        <div className="margen">
            <ItemList items={items}/>
        </div>
    )
}
//fw700 es una clase estilo/utilidad 