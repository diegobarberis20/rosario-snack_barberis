import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetalContainer = ({productosJSON}) => {

    const [producto,setProducto] = useState(false);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                    res(productosJSON);
            }, 2000);
        });
        
        promesa.then((productosJSON)=>{
            const resultadoObtenido = productosJSON.find( item => item.id == id );
            setLoading(false);
            setProducto(resultadoObtenido)  
        })
    }, [id])

    if(loading){
        return (
            <>
                <h1>Cargando...</h1> 
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

export default ItemDetalContainer
