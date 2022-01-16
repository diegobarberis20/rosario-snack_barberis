import ItemDetailCarrito from "./ItemDetailCarrito";


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
