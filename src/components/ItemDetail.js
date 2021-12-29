const ItemDetail = ({producto}) => {
    // console.log(producto);
    return (
        <div className="container-fluid p-5 my-4 contenedorProducto">
            <div className="row justify-content-center justify-content-sm-around">
                <div className="col-12 col-md-5 d-flex justify-content-center imagenProducto">
                    <img src={producto.imagen} alt="" />
                </div>

                <div className="col-12 col-md-3">
                    <h1 className="mb-5">{producto.name}</h1>
                    <p className="mb-3">{producto.descripcion}</p>
                    <h3>Precio: ${producto.precio}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
