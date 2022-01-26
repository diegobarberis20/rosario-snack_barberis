import ItemDetailCarrito from "./ItemDetailCarrito";

const ItemListCarrito = ({carrito, onDelete}) => {
   
    return (
        carrito.map((item, indice)=>{
            return(
                <div className="row justify-content-center">
                    <ItemDetailCarrito key={indice} producto={item} onDelete={onDelete} />
                </div>
            )           
         })
    )
}

export default ItemListCarrito
