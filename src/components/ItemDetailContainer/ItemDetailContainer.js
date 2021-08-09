import { Fragment, useEffect, useState } from "react";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { dataBase } from "../Firebase/Firebase";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect( () => {
        
        const getFirestore = () =>  dataBase;
        const db = getFirestore();
        const itemCollection = db.collection('productos');
        const itemsFiltrados = itemCollection.where('itemId','==', parseInt(id));

        itemsFiltrados.get().then( (querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("no results")
            }
            const itemFiltrado = querySnapshot.docs.map( doc => doc.data())
            setItem( itemFiltrado )

        }).catch( error => {
            console.log("Error searching items", error);
        })
        
    }, [id])

    /* console.log("item",item); */
    return(
        <Fragment >
            <h2 className="centrarTexto subtitulo">Detalles</h2>
            { item ? <ItemDetail item={ item }/> : <p>Cargando...</p> }
        </Fragment>
    )
}