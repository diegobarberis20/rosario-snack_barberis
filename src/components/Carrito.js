import ItemDetailCarrito from "./ItemDetailCarrito";
import { useContext } from "react";
import { contexto } from "./CartContext";
import ItemListCarrito from "./ItemListCarrito";

const Carrito = () => {

    const {carrito,precio_total,removeItem,clear} = useContext(contexto);

    const onDelete = (id) =>{
        removeItem(id)
    }
 
    if(carrito.length == 0){

         return (    
               <div className="container my-4">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-primary">Carrito de compras</h1>
                            <h4><i>No hay productos agregados al carrito</i></h4>
                        </div>
                    </div>
                </div>
         )

    }else{
        return(      
                <>
                    <div className="container my-4">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-primary">Carrito de compras</h1>
                            </div>
                        </div>
                    </div>      

                    <ItemListCarrito carrito={carrito} onDelete={onDelete}/>

                    <div className="container my-4">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between">
                                <button className="btn btn-warning" onClick={clear}>Vaciar el carrito</button>
                                <h4>Total: ${precio_total}</h4>       
                            </div>
                        </div>
                    </div>            
                </>        
        )}
}

export default Carrito
