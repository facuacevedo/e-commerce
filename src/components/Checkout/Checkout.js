import {  useContext, useState } from "react"
import { Link } from "react-router-dom"
import firebase from 'firebase/app'
import 'firebase/firestore'
import { dataBase } from "../Firebase/Firebase"
import { CartContext } from "../../Context/CartContext"
import { Form } from "../Form/Form"
import './Checkout.css';

export const Checkout = () => {
    const { order, total, cart } = useContext(CartContext);
    const [ end, setEnd ] = useState(true)

    const getFirestore = () => dataBase;
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
        order,
        date: firebase.firestore.Timestamp.fromDate( new Date() ),
        total
    }

    /* console.log("info", order) */

    const onSetOrder = () => {
        orders.add(newOrder)
        .catch( err => console.log(err))
        setEnd(false)
    }
    return (
        <div className="producto checkout">
            <p className="tituloCheck">Tus productos seleccionados</p>
            <div className="contenidoCheckout" >
                <p>Producto</p>
                <p>Cantidad</p>
                <p>Subtotal</p>
            </div>
            {
                cart.map( ({ item, quantity }) => (
                    <div className="contenidoCheckout" key= {item[0].itemId}>
                        <p>{item[0].title}</p>
                        <p>{quantity}</p>
                        <p>$ {item[0].price * quantity}</p>
                    </div>
                ))
            }
            <p className="total">Total ${total}</p>
            { end
            ? <Form onClick={ onSetOrder } />
            : <div className="compraFinalizada producto">
                <p>Muchas gracias por tu compra! </p>
                <p>Nos estaremos comunicando con usted.</p>
                <Link to="/"><button>Ir al inicio</button></Link>
            </div>   
            }

        </div>
    )
}