import ItemCount from "./ItemCount.js";
// import { useState } from "react";

const ItemDetail = ({producto}) => {    

        return (
            <div className="container-fluid p-5 my-4 contenedorProducto">
                <div className="row justify-content-center justify-content-sm-around">
                    <div className="col-12 col-md-5 d-flex justify-content-center imagenProducto">
                        <img src={producto.imagen} alt="" />
                    </div>
    
                    <div className="col-12 col-md-3">
                        <h1 className="mb-5">{producto.name}</h1>
                        <p className="mb-3">{producto.descripcion}</p>
                        <h3 className="mb-4">Precio: ${producto.precio}</h3>
                        {/* <ItemCount  stock={producto.stock} initial={1} onAdd={onAdd}/> */}
                                        
                    </div>
                </div>
            </div>
         )
    
}

export default ItemDetail
