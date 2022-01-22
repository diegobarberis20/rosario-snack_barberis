import { useState } from "react";
import { memo } from "react";

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
        <>    
            <span><strong>Cantidad </strong>(Stock disponible: {stock})</span>
            <div className="input-group col-auto">
                <div className="input-group-prepend btn-count" onClick={disminuirContador}>
                    <div className="input-group-text bg-primary text-white">-</div>
                </div>
                
                <input type="text" className="form-control" value={contador}/>

                <div className="input-group-append btn-count" onClick={aumentarContador}>
                    <div className="input-group-text bg-primary text-white">+</div>
                </div>
            </div>

            <button className="btn btn-success w-100 mt-2" onClick={()=>{onAdd(contador)}}>Comprar</button>
        </>       
    )
}

export default memo(ItemCount)
