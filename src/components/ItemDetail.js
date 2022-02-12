import ItemCount from "./ItemCount.js";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ItemDetail = ({producto}) => {  

        const { addItem, isInCart } = useContext(contexto)
    
        const [compra,setCompra] = useState(false);

        const onAdd = (cantidad) => {
            setCompra(true);
            addItem(producto,cantidad,producto.precio);
            toast.success('Se agrego '+ producto.name + " al carrito")
        }
        
        const respuestaIsInCart = isInCart(producto.id);

        if(compra || respuestaIsInCart)
        {
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center p-5 my-5 contenedorProducto">
                    <div className="row w-100 justify-content-around">

                        <div className="col-12 col-md-5 d-flex justify-content-center imagenProducto">
                            <img src={producto.imagen} alt="" />
                        </div>
        
                        <div className="col-12 col-md-5">
                            <h1 className="tituloItemDetail mb-3">{producto.name}</h1>
                            <p className="descripcionDetail mb-5">{producto.descripcion}</p>
                            <h3 className="precioDetail mb-5">Precio: ${producto.precio}</h3>
                            <div>
                                <Link to="/">
                                    <button className="btn btn-warning w-100" >Seguir comprando</button> 
                                </Link>     <Link to="/cart">
                                    <button className="btn btn-success mt-3 w-100" >Terminar la compra</button> 
                                </Link>    
                            </div>
                                                                          
                        </div>
                    </div>
                </div>
             )
        }else{
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center p-5 my-5 contenedorProducto">
                    <div className="row w-100 justify-content-around">

                        <div className="col-12 col-md-5 d-flex justify-content-center imagenProducto">
                            <img src={producto.imagen} alt="" />
                        </div>
        
                        <div className="col-12 col-md-5">
                            <h1 className="tituloItemDetail mb-3">{producto.name}</h1>
                            <p className="descripcionDetail mb-5">{producto.descripcion}</p>
                            <h3 className="precioDetail mb-4">Precio: ${producto.precio}</h3>
                            <ItemCount  stock={producto.stock} initial={1} onAdd={onAdd} />                           
                        </div>
                        
                    </div>
                </div>
             )
        } 
}

export default ItemDetail
