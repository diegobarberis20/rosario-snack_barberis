import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDoc, doc, where } from "firebase/firestore";

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

                setLoading(false);
                setProducto(resultado.data());
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
                <div className="container">
                    <div className="row">

                        <ItemDetail producto={producto} />
                            
                    </div>
                </div>                                                   
            )               
         }     
}

export default ItemDetailContainer
