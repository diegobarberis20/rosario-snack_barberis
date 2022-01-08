
import logoRosarioSnacks from '../assets/logoRosarioSnacks.jpg';
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
                    <Link className="nav-link active" aria-current="page" to="category/1">Cris Jor</Link>
                    <Link className="nav-link" to="/category/2">Krachitos</Link>
                    <Link className="nav-link" to="contacto">Contacto</Link>
                </div>
                </div>
                <CardWidget className="order-1"/>
            </div>
            
           
        </nav>
        
    )
}

export default NavBar;