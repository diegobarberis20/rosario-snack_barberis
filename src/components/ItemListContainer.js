import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { toast } from "react-toastify";

const ItemListContainer = () => {

    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    const [productos, setProductos] = useState([])

    useEffect(() => {

        let pedido;

        if(id){
            const collectionProductos = collection(db, "productos");
            const filtro = where("categoria","==", parseInt(id)); 
            const consulta = query(collectionProductos,filtro);
            pedido = getDocs(consulta);
        }else{
            const collectionProductos = collection(db, "productos");
            pedido = getDocs(collectionProductos);
        }
    
        pedido
            .then((resultado)=>{
                const docs = resultado.docs
                const docs_productos = docs.map(doc => {              
                                            const producto = {
                                                idFirebase: doc.id,
                                                ...doc.data()
                                            }
                                            return producto
                })
                setProductos(docs_productos);
                setLoading(false);
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
                <div className="container my-5">
                    <div className="row">
                        
                            <ItemList productos={productos}/>
                            
                    </div>
                </div>        
            )     
         }         
}

export default ItemListContainer
