import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetalContainer = ({productoJSON}) => {

    const [producto,setProducto] = useState(productoJSON);
    const [loading,setLoading] = useState(true);

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

    }, [])
 
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
                        
                            <ItemDetail producto={producto}/>
                            
                    </div>
                </div>
                
            </>
        )

    }
    
       
}

export default ItemDetalContainer
