const Item = ({producto, count}) => {
    return (
        
                <>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-4">{producto.name}</h2>
                                <p className="card-body text-center mb-0 p-0"><strong>Precio:</strong> ${producto.precio}</p>
                                <div className="py-4">{count}</div>
                            </div>
                        </div>
                    </div>
                </>          
                   

           
   
        
    )
}

export default Item
