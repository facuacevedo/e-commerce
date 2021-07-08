import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children, defaultCart = []}) => {

    const [ cart, setCart ] = useState( defaultCart )

    //agrega la cantidad o item al cart
    const addItem = (item, quantity) => {
            updateCart({ item, quantity });
            console.log("item subido");
    }

    //actualiza el carrito
    const updateCart = (object) => {
        setCart([...cart, object] );
    }

    
    //busca si hay un item igual en el cart
    /* const isInCart = () => {console.log("isincart")} */
    
    /* const removeItem = () => {console.log("removeitem")}; */
    
    const clearCart = () => {
        setCart(defaultCart);
        console.log("clear")
    };
    
    //ver que tiene el cart
    console.log("cart", cart);
    
    return (
        <CartContext.Provider value={ { addItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}