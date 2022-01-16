import ItemCount from "./ItemCount.js";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "./CartContext";

const ItemDetail = ({producto}) => {  

        const { addItem } = useContext(contexto)
    
        const [compra,setCompra] = useState(false);

        const onAdd = (cantidad) => {
            setCompra(true);
            addItem(producto,cantidad,producto.precio);
        }

        if(compra)
        {
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
                        </div>
                    </div>
                </div>
             )

        }else{

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
                            <ItemCount  stock={producto.stock} initial={1} onAdd={onAdd} producto={producto}/>                           
                        </div>
                    </div>
                </div>
             )
        } 
}

export default ItemDetail
