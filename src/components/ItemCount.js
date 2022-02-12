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

    let ultimasUnidades = "";
    let stockDisponible = "";
    if(stock > 3){
        ultimasUnidades =  ""; 
        stockDisponible = stock + " unidades";
    }else{
        ultimasUnidades =  "text-danger";
        stockDisponible = "Ultimas! " + stock + " unidades"; 
    }

    return (    
        <>   
            <span className={ultimasUnidades}><strong>Stock disponible: </strong>{stockDisponible}</span>
            <div className="input-group col-auto mt-2">
                <div className="input-group-prepend btn-count" onClick={disminuirContador}>
                    <div className="input-group-text bg-dark text-white">-</div>
                </div>
                
                <input type="text" className="form-control" value={contador}/>

                <div className="input-group-append btn-count" onClick={aumentarContador}>
                    <div className="input-group-text bg-dark text-white">+</div>
                </div>
            </div>

            <button className="btn btn-success w-100 mt-5" onClick={()=>{onAdd(contador)}}>Comprar</button>
        </>       
    )
}

export default ItemCount
