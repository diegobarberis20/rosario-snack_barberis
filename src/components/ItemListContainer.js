import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosJSON from "./../productos.json"


const ItemListContainer = (greeting) => {

    const productos = productosJSON;

    const [loading,setLoading] = useState(true);

    // const [productos, setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                    res(productos);
            }, 2000);
        });
    
        
        promesa.then((productos)=>{
                        
                        console.log(productos);
                        setLoading(false);
        })

    }, [])
 
    if(loading){
        return (
            <>
                <h1>{greeting.saludo}</h1>
                <h1>Cargando...</h1>
 
            </>
        )
    }else{

        return (
            <>
                <h1>{greeting.saludo}</h1>
                
                <div className="container">
                    <div className="row">
                        
                            <ItemList productos={productos}/>
                            
                    </div>
                </div>
                
            </>
        )

    }
    
       
}

export default ItemListContainer
