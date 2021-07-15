import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
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
                            <div key={product.item[0].id}>
                                <ul className="listaProductos">
                                    <li>{product.item[0].title}</li>
                                    <li>{product.quantity}</li>
                                    <li>$ {product.item[0].price}</li>
                                    <li>$ { product.quantity * product.item[0].price }</li>
                                    <li><button className="btnRemove" onClick={ () => removeItem(product.item[0].id) }>
                                    Eliminar
                                    </button></li>
                                </ul>
                            </div>)}
                    </div>
                : <p className="sinProductos">Debes seleccionar al menos 1 producto</p>
            }
            {   total === 0
                ? false
                : <p className="valorTotal">$ {total}</p>}

            {cart.length > 0
            ? <button className="btnClear" onClick={ () => { clearCart() }}>Limpiar carrito</button>
            : false
        }
        </div>
        </section>
    )
}