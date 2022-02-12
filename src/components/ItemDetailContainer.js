import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState(false);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {

        const collectionProductos = collection(db, "productos");
        const docRef = doc(collectionProductos,id);
        const pedido = getDoc(docRef);

        pedido
            .then((resultado)=>{

                const producto = {
                    idFirebase: resultado.id,
                    ...resultado.data()
                }

                setLoading(false);
                setProducto(producto);
            })
            .catch((error) => {
                toast.error(error);
            })

    }, [id])

    if(loading){
        return ( 
            <div className="container-fluid fondoLoading h-100 w-100 mx-0">
                    <div className="lds-ripple"><div></div><div></div></div>  
            </div>                   
        )
    }else{
        return (                                            
                <div className="container contenedorProductoMayor">
                    <div className="row h-100">

                        <ItemDetail producto={producto} />
                            
                    </div>
                </div>                                                   
            )               
         }     
}

export default ItemDetailContainer
