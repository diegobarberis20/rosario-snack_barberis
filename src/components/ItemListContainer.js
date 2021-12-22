import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import productos from "./../productos.json"


const ItemListContainer = (greeting) => {

    const produc = productos;

    // const produc = ['Producto1', 'Producto2', 'Producto3', 'Producto4' ];

    const [loading,setLoading] = useState(true);

    // const [productos, setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                                res(produc);
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
                        
                            <ItemList productos={produc}/>
                            
                    </div>
                </div>
                
            </>
        )

    }
    
       
}

export default ItemListContainer
