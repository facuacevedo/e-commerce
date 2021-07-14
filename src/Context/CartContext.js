import { createContext, useState, useEffect } from 'react';;

export const CartContext = createContext();

export const CartProvider = ({ children, defaultCart = []}) => {

    const [ cart, setCart ] = useState( defaultCart )
    const [ cantidadCarrito, setCantidadCarrito] = useState(0);

    //agrega la cantidad o item al cart
    const addItem = (item, quantity) => {
        //busca si hay un item igual en el cart
        if( cart.find( (object) => (object.item[0].id === item[0].id)) ){
            console.log("sumar la cantidad");
            const object = cart.find( obj => obj.item[0].id === item[0].id);
            //le suma la cantidad
            object.quantity += quantity;
            /* console.log("objeto isincart",object) */
        }else{
            updateCart({ item, quantity });
            console.log("item subido");
        }
    }

    //actualiza el carrito
    const updateCart = (object) => {
        setCart([...cart, object] );
    }
    
    const removeItem = (itemId) => {
            const newCart = cart.slice();
            const filterCart = newCart.filter( obj => obj.item[0].id !== itemId )
            setCart( filterCart );
            console.log("removeitem")
    };
    
    const clearCart = () => {
        setCart(defaultCart);
        console.log("clear")
    };
    
    

    useEffect( () => {
        const quantityCart = () => {
            let total = 0
            //recorre cada objeto y le suma la cantidad al total
            if( cart.length > 0 ){
                cart.forEach( obj => total += obj.quantity)
            }
            console.log("total", total);
            setCantidadCarrito(total);
        }
        quantityCart()
    } , [cart])

    //ver que tiene el cart
    console.log("cart", cart);
    
    return (
        <CartContext.Provider value={ { addItem, clearCart, removeItem, cart, cantidadCarrito }}>
            {children}
        </CartContext.Provider>
    )
}