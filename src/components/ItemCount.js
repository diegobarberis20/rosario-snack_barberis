import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador,setContador] = useState(initial);

    const aumentarContador = () => {

        if(contador < stock)
        {
            setContador(contador + 1);
        }      
    }

    const disminuirContador = () => {

        if(contador > 0)
        {
            setContador(contador - 1);
        }
    }

    return (
         <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-auto">
                             
                    <span><strong>Cantidad </strong>(stock disponible: {stock})</span>
                    <div className="input-group col-auto">
                        <div class="input-group-prepend" onClick={disminuirContador}>
                            <div class="input-group-text bg-primary text-white">-</div>
                        </div>
                        
                        <input type="text" className="form-control" value={contador}/>

                        <div class="input-group-append" onClick={aumentarContador}>
                            <div class="input-group-text bg-primary text-white">+</div>
                        </div>
                    </div>
                                               
                    <button className="btn btn-success w-100 mt-2">Agregar a carrito</button>
                </div>
            </div>
         </div>
                
    )
}

export default ItemCount
