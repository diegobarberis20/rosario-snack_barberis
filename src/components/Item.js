import { Link } from "react-router-dom";
 
const Item = ({producto}) => {

    return (     
            <div className="col-4 d-flex justify-content-center">
                <div className="card productoCard mt-4">

                    <div className="card-header">{producto.categoriaName}</div>

                    <img className="card-img-top" src={producto.imagen} alt="Imagen producto"></img>

                    <div className="card-body ">
                        <h2 className="card-title text-center pt-2">{producto.name}</h2>
                        <p className="card-body text-center mb-0 p-0"><strong>Precio:</strong> ${producto.precio}</p>

                        <div className="container-fluid mt-2">
                            <div className="row justify-content-center">
                                <div className="col-8">

                                    <Link to={"/item/"+producto.idFirebase}>
                                        <button className="btn btn-success w-100 mt-2">Ver mas</button>
                                    </Link>

                                </div>
                            </div>    
                        </div>

                    </div>
                </div>
            </div>                        
    )
}

export default Item
