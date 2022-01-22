import ItemDetailCarrito from "./ItemDetailCarrito";

const ItemListCarrito = ({carrito, onDelete}) => {
   
    return (
        carrito.map((item)=>{
            return(
                <div className="row justify-content-center">
                    <ItemDetailCarrito producto={item} onDelete={onDelete} />
                </div>
            )           
         })
    )
}

export default ItemListCarrito
