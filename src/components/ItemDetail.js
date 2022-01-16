import ItemCount from "./ItemCount.js";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {  

        const { addItem, isInCart } = useContext(contexto)
    
        const [compra,setCompra] = useState(false);
        const [estaEnElCarrito,setEstaEnElCarrito] = useState(false);

        const onAdd = (cantidad) => {
            setCompra(true);
            addItem(producto,cantidad,producto.precio);
        }

        const respuesta = isInCart(producto.id);

        if(compra || respuesta)
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
                            <Link to="/cart">
                                <button className="btn btn-warning" >Terminar la compra</button> 
                            </Link>                                                   
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
