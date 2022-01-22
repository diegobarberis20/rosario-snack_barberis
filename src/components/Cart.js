import ItemListCarrito from "./ItemListCarrito";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const {carrito,precio_total,removeItem,clear} = useContext(contexto);

    const onDelete = (id) =>{
        removeItem(id)
    }
 
    if(carrito.length === 0){
        return(    
               <div className="container my-4">
                    <div className="row">
                        <div className="col-12">

                            <h1 className="text-primary">Carrito de compras</h1>
                            <h4><i>No hay productos agregados al carrito</i></h4>
                            <Link to="/">
                                <button className="btn btn-warning mt-4">Seguir comprando</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
        )
    }else{
        return(      
                <>
                    <div className="container contenedorCart p-4 my-5">
                        <div className="row justify-content-center">
                            <div className="col-12">

                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="text-dark mb-3">Carrito de compras</h1>
                                    </div>  
                                </div>

                               <div className="row justify-content-center">
                                    <ItemListCarrito carrito={carrito} onDelete={onDelete}/>
                               </div>               

                                <div className="row mt-3">
                                    <div className="col-12 d-flex justify-content-between">

                                        <button className="btn btn-warning" onClick={clear}>Vaciar el carrito</button>
                                        <h4>Total: ${precio_total}</h4>      
                                        
                                    </div>
                                </div>    

                            </div>
                        </div>
                    </div>      

                        
                </>        
        )}
}

export default Carrito
