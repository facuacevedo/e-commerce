import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { dataBase } from '../Firebase/Firebase';


export const ItemListContainer = ({greeting}) => {
    const { id } = useParams();
    //creo un state de items que es un array
    const [items, setItems] = useState([]);
    const [ loading, setLoading ] = useState(false);

    //creo un efecto para que escuche cualquier cambio en el id
    useEffect(()=>{
        setLoading(true)
        const getFirestore = () =>  dataBase;
        const db = getFirestore();
        const itemCollection = db.collection('productos');
        const itemsFiltrados = id ? itemCollection.where('categoryId','==', id) : itemCollection;

        itemsFiltrados.get().then( (querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("no results")
            }
            setItems( querySnapshot.docs.map( doc => doc.data()));
        }).catch( error => {
            console.log("Error searching items", error);
        }).finally( () => {
            setLoading(false);
        })

    }, [id]);
    
    //luego de que termine ese setTimeOut, "actualizo" el state y lo paso como argumento en ItemList
    
    return (
        <div className="margen">
            {
                loading ? <p>Cargando...</p> : <ItemList items={items}/>
            }
            
        </div>
    )
}
//fw700 es una clase estilo/utilidad 