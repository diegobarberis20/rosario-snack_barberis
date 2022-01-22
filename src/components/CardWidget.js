import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { contexto } from "./CartContext";

const CardWidget = () => {

    const {cantidad_total} = useContext(contexto)
    
    if (cantidad_total !== 0) {
        return(           
            <>  
                <Link to="/cart" className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingCart} color="white" size="2x"/>
                </Link>    
                <span className='text-light'><strong>{cantidad_total}</strong></span>
            </>         
            )
    }else{
        return(           
                <>
                </>
              )
    }
}

export default CardWidget
