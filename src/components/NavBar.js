
import logoRosarioSnacks from '../assets/logoRosarioSnacks.jpg';

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src={logoRosarioSnacks} alt="" className='logo'/>      
                <h3 className="titulo">Rosario Snacks</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarNavAltMarkup">
                <div className="navbar-nav text-light">
                    <a className="nav-link active" aria-current="page" href="#">Productos</a>
                    <a className="nav-link" href="#">Conocenos</a>
                    <a className="nav-link" href="#">Contacto</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;