import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosJSON from "./../productos.json"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const productos = productosJSON;
    const [loading,setLoading] = useState(true);
    const {id} = useParams();

    // const [productos, setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                    res(productos);
            }, 2000);
        });
    
        
        promesa.then((productos)=>{                   
                        // console.log(productos);
                        setLoading(false);
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
                <>                
                    <div className="container">
                        <div className="row">
                            
                                <ItemList productos={productos} idCategoria={id}/>
                                
                        </div>
                    </div>
                    
                </>
            )     

    }
    
       
}

export default ItemListContainer
