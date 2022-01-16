const ItemDetailCarrito = ({ producto, onDelete }) => {

    const quitarProducto = () => {
        onDelete(producto.id);
    }

    return (
        <div className="row fila-carrito p-3 mb-3">
                <div className="col-1 imagen-carrito">
                    <img src={producto.imagen} alt="" />
                </div>
                <div className="col-4 d-flex flex-column justify-content-center">
                     <h3>{producto.name}</h3>
                     <span>{producto.precio}</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                     <span>{producto.cantidad} unidades</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <span>${producto.precio * producto.cantidad}</span>
                </div>  
                <div className="col-3 d-flex align-items-center justify-content-end">
                    <button className="btn btn-danger" onClick={quitarProducto}>Quitar</button>
                </div>    
        </div>
    )
}

export default ItemDetailCarrito
