import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {

    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    const [productos, setProductos] = useState([])

    useEffect(() => {

        if(id){
            const collectionProductos = collection(db, "productos");
            const filtro = where("categoria","==", parseInt(id)); 
            const consulta = query(collectionProductos,filtro);
            var pedido = getDocs(consulta);
        }else{
            const collectionProductos = collection(db, "productos");
            var pedido = getDocs(collectionProductos);
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
                console.log(error);
            })

    }, [id])
 
    if(loading){
        return (
                <div className="lds-ripple h-100"><div></div><div></div></div>   
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
