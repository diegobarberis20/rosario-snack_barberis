import ItemListCarrito from "./ItemListCarrito";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection} from "firebase/firestore";
import { toast } from "react-toastify";


const Carrito = () => {

    const navigate = useNavigate()

    const redirect = () => {
        navigate("/");
    }

    const {carrito,precio_total,removeItem,clear} = useContext(contexto);

    const onDelete = (id) =>{
        removeItem(id)
    }

    const crearOrden = () =>{

        const coleccionOrdenes = collection(db, "ordenes");
        const orden = {
              usuario : "Diego",
              carrito: carrito,
              precio_total: precio_total
        }

        const pedido = addDoc(coleccionOrdenes, orden);

        pedido
            .then((respuesta) => {
                clear();
                toast.success("La compra fue realizada con exito! Su numero de orden es " + respuesta.id );
                redirect(); 
            })
            .catch((error) => {
                console.log(error)
            })
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
                                    <div className="d-flex">
                                        <h4 className="mt-2 m-0 totalCarrito">Total: ${precio_total}</h4>     
                                        <button className="btn btn-success" onClick={crearOrden}>Terminar compra</button> 
                                    </div>
                                    
                                    
                                </div>
                            </div>    

                        </div>
                    </div>
                </div>             
        )}
}

export default Carrito
