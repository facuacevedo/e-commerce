import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link} from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
    const { cart, removeItem, clearCart, total } = useContext( CartContext );

    return (
        <section className="bgProductos">
            <div className="seccionProductos">
                <ul className="listaProductos titulos">
                    <li>Producto</li>
                    <li>Cantidad</li>
                    <li>Precio</li>
                    <li>Subtotal</li>
                    <li>Total</li>
                </ul>
            { cart.length > 0 ?
                    <div className="cardProducto">
                    { cart.map( ( product ) => 
                        <div key={product.item[0].itemId}>
                                <ul className="listaProductos">
                                    <li>{product.item[0].title}</li>
                                    <li>{product.quantity}</li>
                                    <li>$ {product.item[0].price}</li>
                                    <li>$ { product.quantity * product.item[0].price }</li>
                                    <li><button className="btnRemove" onClick={ () => removeItem(product.item[0].itemId) }>
                                    Eliminar
                                    </button></li>
                                </ul>
                            </div>)}
                    </div>
                : <p className="sinProductos">Debes seleccionar un producto</p>
            }
            {   total === 0
                ? false
                : <p className="valorTotal">$ {total}</p>}
    {/* BOTONES */}
                {   
                    cart.length > 0
                    ? <button className="btnClear" onClick={ () => { clearCart() }}>Limpiar carrito</button>
                    : false
                }
                {
                    cart.length === 0
                    ? false
                    :<Link to="/checkout">
                        <button>Finalizar compra</button>
                    </Link>
                }
        </div>

        </section>
    )
}