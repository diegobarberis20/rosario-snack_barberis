import ItemListCarrito from "./ItemListCarrito";
import CardForm from "./CartForm";
import { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const [mostrarForm, setMostrarForm] = useState(false);

    const desplegarForm = () => {
        setMostrarForm(true);
    }

    const ocultarForm = () =>{
        setMostrarForm(false);
    }

    const {carrito,precio_total,removeItem,clear} = useContext(contexto);

    const onDelete = (id) =>{
        removeItem(id)
    }

    if(carrito.length === 0){
        return(    
               <div className="container contenedorCart p-4 py-5 my-5">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">

                            <h1 className="text-primary"><strong>Carrito de compras</strong></h1>
                            <h4><i>No hay productos agregados al carrito</i></h4>
                            <Link to="/">
                                <button className="btn btn-warning mt-4">Seguir comprando</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
        )
    }else{

        if(!mostrarForm)
            return(  
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

                                        <button className="btn btn-outline-secondary" onClick={clear}>Vaciar el carrito</button>
                                        <div className="d-flex">
                                            <h4 className="mt-2 m-0 totalCarrito">Total: ${precio_total}</h4>     
                                            <button className="btn btn-success" onClick={ desplegarForm }><strong>Continuar compra</strong></button> 
                                        </div>                                
                                        
                                    </div>
                                </div>    

                            </div>
                        </div>
                    </div>  
            )
        else{
            return(
                <CardForm ocultarForm={ ocultarForm }/>
            )
        }
    }
}

export default Carrito
