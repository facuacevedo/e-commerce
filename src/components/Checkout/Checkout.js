import { Fragment, useContext, useState } from "react"
import firebase from 'firebase/app';
import 'firebase/firestore' ;
import { Form } from "../Form/Form"
import { dataBase } from "../Firebase/Firebase";
import { CartContext } from "../../Context/CartContext";


export const Checkout = () => {
    const { order } = useContext(CartContext);

    const getFirestore = () => dataBase;
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
        ...order
    }

    console.log("info", order)

    const onSetOrder = () => {
        orders.add(newOrder)
        .catch( err => console.log(err))
    }
    return (
        <Fragment>
            <Form onClick={ onSetOrder } />
        </Fragment>
    )
}