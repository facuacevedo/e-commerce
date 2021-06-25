import './Item.css';

export const Item = ({item}) => {
    const agregar = () =>{
        alert("Añadido al carrito");
    }
    
    return (
        <div className="producto">
            <p className="producto-id">{item.id}</p>
            <p className="producto-titulo">{item.title}</p>
            <img src={item.imgUrl} alt="imagen"></img>
            <p className="producto-precio">{item.price}</p>
            <p className="producto-descripcion">{item.description}</p>
            <button onClick={agregar} >Añadir al carrito</button>
        </div>
    )
}