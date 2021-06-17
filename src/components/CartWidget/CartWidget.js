import './CartWidget.css';//importo los estilos
import logoCart from '../../img/logoCart.png';//importo el logo del carrito

export const CartWidget = () =>{
    return(
        <div>
            <img src={logoCart} alt="cart"></img>
        </div>
    )
}