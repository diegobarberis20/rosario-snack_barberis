const ItemDetailCarrito = ({ producto, onDelete }) => {

    return (
        <div className="row fila-carrito p-3 mb-3">
                <div className="col-1 imagen-carrito">
                    <img src={producto.imagen} alt="" />
                </div>
                <div className="col-4 d-flex flex-column justify-content-center">
                    <h3>{producto.name}</h3>
                    <span>{producto.precio}</span>
                </div>
                <div className="col-2 d-flex flex-column justify-content-around">
                    <span><strong>Cantiad</strong></span>
                    <span>{producto.cantidad} unidades</span>
                </div>
                <div className="col-2 d-flex flex-column justify-content-around">
                    <span><strong>Precio Unitario</strong> </span>
                    <span>${producto.precio}</span>
                </div>  
                <div className="col-2 d-flex flex-column justify-content-around">
                    <span><strong>Precio Total</strong></span>
                    <span>${producto.precio * producto.cantidad}</span>
                </div>  
                <div className="col-1 d-flex align-items-center justify-content-end">
                    <button className="btn btn-danger" onClick={()=>{onDelete(producto.id)}}>Quitar</button>
                </div>    
        </div>
    )
}

export default ItemDetailCarrito
