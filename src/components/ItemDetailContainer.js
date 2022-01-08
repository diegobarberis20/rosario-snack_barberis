import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetalContainer = ({productoJSON}) => {

    const [producto,setProducto] = useState(productoJSON);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {

        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                    res(producto);
            }, 2000);
        });
        
        promesa.then((productoJSON)=>{
                        setLoading(false);
                        setProducto(productoJSON);
        })

    }, [id])

    console.log(producto)
 
    if(loading){
        return (
            <>
                <h1>Cargando...</h1>
 
            </>
        )
    }else{
        return (        
            <>
                
                <div className="container">
                    <div className="row">
                        
                            <ItemDetail producto={producto} idProducto={id} />
                            
                    </div>
                </div>
                
            </>
        )

    }
    
       
}

export default ItemDetalContainer
