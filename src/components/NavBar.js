import CardWidget from "./CardWidget.js";
import Cart from "./Cart.js"
import logoRosarioSnacks from '../assets/logoRosarioSnacks.jpg';
import { Link, NavLink} from "react-router-dom";

function NavBar(){
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container-fluid">

                <Link to="/">
                    <img src={logoRosarioSnacks} alt="" className='logo'/>  
                </Link>    
                <h3 className="titulo">Rosario Snacks</h3>
                <button className="navbar-toggler order-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-light">
                
                        <NavLink exact={true}className="nav-link"  activeClassName='is-active' to='category/1'>Cris Jor</NavLink>
                        <NavLink className="nav-link" activeClassName='is-active' to='category/2'>Krachitos</NavLink>
                
                    </div>
                </div>
                
                <CardWidget className="order-1" carrito={<Cart/>}/>
                              
            </div>          
        </nav>       
    )
}

export default NavBar;