import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const contexto = createContext();

const { Provider } = contexto;

const CartContext = ({children}) => {

    const [carrito,setCarrito] = useState([]);
    const [cantidad_total,setCantidad_total] = useState(0);
    const [precio_total,setPrecio_total] = useState(0);

    const addItem = (producto,cantidad,precio) => {

        const resp = isInCart(producto.id)

        if(!resp){
            producto.cantidad = cantidad;
            setCarrito([...carrito,producto]);
            setCantidad_total(cantidad_total + cantidad);
            setPrecio_total(precio_total + (precio * cantidad));
        }
    };
    
    const removeItem = (id) => {
        const resultado = carrito.filter((item) => item.id == id);
        setCantidad_total(cantidad_total - resultado[0].cantidad);
        setPrecio_total(precio_total - (resultado[0].precio * resultado[0].cantidad));

        const arr = carrito.filter((item) => item.id !== id);
        setCarrito(arr);      
    };

    const isInCart = (id) =>{
        const resultado = carrito.filter((item) => item.id == id);

        const respuesta = resultado.length === 0 ?  false : true;;

        return respuesta;
    }
    
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
        isInCart
    }

    console.log("Render context")
    
    return (
       <Provider value={valorContexto}>
            {children}
       </Provider>
    )
}

export default CartContext


