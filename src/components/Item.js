import { Link } from "react-router-dom";
 
const Item = ({producto, count}) => {
    return (
        
                <>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-4">{producto.name}</h2>
                                <p className="card-body text-center mb-0 p-0"><strong>Precio:</strong> ${producto.precio}</p>

                                <div className="container-fluid mt-2">
                                    <div className="row justify-content-center">
                                        <div className="col-auto">

                                            {/* Seccion de count y boton agregar al carrito */}
                                            {/* <div className="pt-4">{count}</div> */}

                                            {/* Link a ver mas */}
                                            <Link to={"/item/"+producto.id}>
                                                <button className="btn btn-primary w-100 mt-2">Ver mas</button>
                                            </Link>

                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </>          
                   

           
   
        
    )
}

export default Item
