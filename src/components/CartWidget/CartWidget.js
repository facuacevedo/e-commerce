import './CartWidget.css';//importo los estilos 
import logoCart from '../../img/logoCart.png';//importo el logo del carrito 
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

export const CartWidget = () =>{
    const { cantidadCarrito, cart } = useContext( CartContext );

    return(
        <div className={`${cart.length === 0 ? 'cartVisibility': 'cartWidget'}`}>
            <img src={logoCart} alt="logo carrito"></img>
            <span>{cantidadCarrito}</span>
        </div>
    )
}