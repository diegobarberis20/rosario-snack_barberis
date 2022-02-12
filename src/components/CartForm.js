import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faAddressCard, faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons';
import {  Navigate } from "react-router-dom";
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { contexto } from "./CartContext";
import { db } from "../firebase";
import { addDoc, collection, doc, updateDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from 'react/cjs/react.development';
import $ from "jquery";

const CardForm = ({ocultarForm}) => {

        const {carrito,precio_total,removeItem,clear} = useContext(contexto);

        const { register, handleSubmit, formState: { errors } } = useForm();

        const [compraHecha, setCompraHecha] = useState(false)


        const crearOrden = () => {
            const collectionProductos = collection(db, "productos");

            carrito.map((item)=>{

                const nuevoStock = item.stock - item.cantidad;
                updateDoc(doc(collectionProductos,item.idFirebase), {stock: nuevoStock})
            })
           
            const coleccionOrdenes = collection(db, "ordenes");
            const orden = {
                  usuario : $("#nombreApellido").val(),
                  email: $("#email").val(),
                  direccion: $("#direccion").val(),
                  numero: $("#numeroDireccion").val(),
                  piso: $("#piso").val(),
                  departamento: $("#departamento").val(),
                  carrito: carrito,
                  precio_total: precio_total
            }

            const pedido = addDoc(coleccionOrdenes, orden);

            pedido
                .then((respuesta) => {           
                    setCompraHecha(true);   
                    toast.success("La compra fue realizada con exito! Su numero de orden es " + respuesta.id );
                    clear();               
                })
                .catch((error) => {
                   toast.error(error)
                })                              
        }

        if(compraHecha){
            
            return <Navigate to="/" />;

        }else{

            return(   

                <div className="container contenedorCart p-4 my-5">

                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-dark mb-3">Datos de la compra</h1>
                        </div>  
                    </div>

                    <form onSubmit={handleSubmit(crearOrden)}>

                        <div className="form-group">
                            <label htmlFor="nombreApellido"><strong>Nombre y Apellido </strong><span className='text-danger'>*</span></label>
                            <div className="input-group mb-2 mt-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text h-100 bg-dark"><FontAwesomeIcon icon={faUser} color="white" size="sm"/></div>
                                </div>
                                <input 
                                    type="text"
                                    id='nombreApellido'
                                    className="form-control"  
                                    placeholder="Ingrese nombre y apellido" 
                                    {...register("nombreApellido", { required: true })}
                                    
                                />                
                            </div>  
                            <p className="text-danger text-small d-block mb-2">
                                    {errors.nombreApellido && <span>Este dato es obligatorio</span>}
                            </p>             
                        </div>

                        <div className="form-group mt-1">
                            <label htmlFor="email"><strong>E-mail </strong><span className='text-danger'>*</span></label>
                            <div className="input-group mb-2 mt-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text h-100 bg-dark"><FontAwesomeIcon icon={faEnvelope} color="white" size="sm"/></div>
                                </div>
                                <input 
                                    type="email" 
                                    id='email' 
                                    className="form-control"  
                                    placeholder="Ingrese e-mail" 
                                    {...register("email", { 
                                            required: true,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                              }
                                        })}
                                />
                            </div>  
                            <p className="text-danger text-small d-block mb-2">
                                    {errors.email?.type === 'required' && <span>Este dato es obligatorio</span>}
                                    {errors.email?.type === 'pattern' && <span>Debe ingresar un e-mail válido</span>}
                            </p>             
                        </div>

                        <div className="form-group mt-1">
                            <label htmlFor="direccion"><strong>Calle domicilio </strong><span className='text-danger'>*</span></label>
                            <div className="input-group mb-2 mt-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text h-100 bg-dark"><FontAwesomeIcon icon={faAddressCard} color="white" size="sm"/></div>
                                </div>
                                <input 
                                    type="text" 
                                    id='direccion' 
                                    className="form-control"  
                                    placeholder="Ingrese calle del domicilio" 
                                    {...register("direccion", { required: true,})}
                                />
                            </div>   
                            <p className="text-danger text-small d-block mb-2">
                                    {errors.direccion?.type === 'required' && <span>Domicilio es obligatorio</span>}
                            </p>                  
                        </div>

                        <div className="row justify-content-between">

                            <div className="col-4 pr-1 mt-1">
                                <div className="form-group">
                                    <label htmlFor="numeroDireccion"><strong>Número </strong><span className='text-danger'>*</span></label>
                                    <input 
                                        type="text" 
                                        id='numeroDireccion' 
                                        className="form-control mt-2"  
                                        placeholder="Ingrese número del domicilio" 
                                        {...register("numeroDireccion", { required: true,})}
                                    />              
                                </div>
                                <p className="text-danger text-small d-block mb-2">
                                    {errors.numeroDireccion?.type === 'required' && <span>Número es obligatorio</span>}
                                </p>
                            </div>

                            <div className="col-4 px-1 mt-1">
                                <div className="form-group">
                                    <label htmlFor="piso"><strong>Piso</strong></label>
                                    <input type="text" id='piso' className="form-control mt-2"  placeholder="Ingrese piso" />   
                                </div>
                            </div>

                            <div className="col-4 pl-1 mt-1">
                                <div className="form-group">
                                    <label htmlFor="departamento"><strong>Departamento</strong></label>
                                    <input type="text" id='departamento' className="form-control mt-2"  placeholder="Ingrese departamento" />               
                                </div>
                            </div>

                        </div>

                        <div className="row justify-content-between mt-4">
                            <div className="col-3">
                                <button className="btn btn-outline-secondary" onClick={ ocultarForm }>Volver</button>
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <button type='submit' className="btn btn-success"><strong>Comprar</strong></button> 
                            </div>       
                        </div>

                    </form>
                </div>     
            )
        }
}

export default CardForm
