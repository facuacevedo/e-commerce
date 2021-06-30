import "./ItemDetail.css"

export const ItemDetail = ({ item }) => {
    return (
        <div className="contenidoItem ">
            <h3>{item.title}</h3>
            <p className="fw700">${item.price}</p>
            <p>{item.description}</p>
            <img src={item.imgUrl} alt="imagen producto" />
        </div>
    )
}