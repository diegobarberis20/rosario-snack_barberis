import Item from './Item.js';
// import ItemCount from "./ItemCount";

const ItemList = ({productos, idCategoria}) => {

    return(
        productos.map((producto)=>{
             // Cuando se seleccionó una categoria
            if(idCategoria == producto.categoria || idCategoria == undefined)
            {
                return (                           
                    <Item producto={producto}/>                                 
                )
            }
        },[])
    )
}

export default ItemList
