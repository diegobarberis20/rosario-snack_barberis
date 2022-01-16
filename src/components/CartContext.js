import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import { Children } from "react/cjs/react.production.min";

export const contexto = createContext();

const { Provider } = contexto;

const CartContext = ({children}) => {

    const [carrito,setCarrito] = useState([]);
    const [cantidad_total,setCantidad_total] = useState(0);
    const [precio_total,setPrecio_total] = useState(0);

    
    const addItem = (producto,cantidad,precio) => {

        const found = carrito.filter(item => {
           return item.name === producto.name
        })

        if(found.length == 0){
            
            producto.cantidad = cantidad;
            setCarrito([...carrito,producto]);
            setCantidad_total(cantidad_total + cantidad);
            setPrecio_total(precio_total + (precio * cantidad));
        }else{
            console.log("ya esta")
        }
    };
    
    const removeItem = (id) => {
        //Busco los datos del producto con el ID para setear los totales
        const resultado = carrito.filter((item) => item.id == id);
        setCantidad_total(cantidad_total - resultado[0].cantidad);
        setPrecio_total(precio_total - (resultado[0].precio * resultado[0].cantidad));

        //Quito al producto del arreglo
        const arr = carrito.filter((item) => item.id !== id);
        setCarrito(arr);
       
    };
    
    const clear = () => {
        setCarrito([]);
        setCantidad_total(0);
        setPrecio_total(0);
    };
    
    const valorContexto = {
        carrito,
        cantidad_total,
        precio_total,
        addItem,
        removeItem,
        clear,
    }
    
    return (
       <Provider value={valorContexto}>
            {children}
       </Provider>
    )
}

export default CartContext


