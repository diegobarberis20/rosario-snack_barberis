import ItemDetailCarrito from "./ItemDetailCarrito";
// import { useContext } from "react";
// import { contexto } from "./CartContext";

const ItemListCarrito = ({carrito, onDelete}) => {
   
    return (

        carrito.map((item)=>{
            return(
                <div className="container">
                    <ItemDetailCarrito producto={item} onDelete={onDelete} />
                </div>
            )           
         })
    )
}

export default ItemListCarrito
