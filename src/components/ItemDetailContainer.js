import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemDetailContainer = ({productosJSON}) => {

    const [producto,setProducto] = useState(false);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {

        const collectionProductos = collection(db, "productos");
        // const pedido = getDocs(collectionProductos)
        const filtro = where("id","==",parseInt(id));
        const consulta = query(collectionProductos, filtro);
        const pedido = getDocs(consulta)

        pedido
            .then((resultado)=>{
                const docs = resultado.docs
                const resultadoObtenido = docs.map(doc => {   

                                            const producto = {
                                                idFirebase: doc.id,
                                                ...doc.data()
                                            }
                                            return producto
                })

                setLoading(false);
                setProducto(resultadoObtenido[0])  
            })
            .catch((error) => {
                 console.log(error);
            })

    }, [id])

    if(loading){
        return (
            <>
                <div className="lds-ripple h-100"><div></div><div></div></div>            
            </>
        )
    }else{
        return (                                            
                <div className="container">
                    <div className="row">

                        <ItemDetail producto={producto} />
                            
                    </div>
                </div>                                                   
            )               
         }     
}

export default ItemDetailContainer
