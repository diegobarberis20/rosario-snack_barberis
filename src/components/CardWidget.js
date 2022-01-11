import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Carrito from "./Carrito.js"
import { Link } from "react-router-dom";

const CardWidget = () => {
    return (
        <>       
            <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} color="white" size="2x"/>
            </Link>    
        </>
    )
}

export default CardWidget
