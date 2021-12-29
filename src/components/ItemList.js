import Item from './Item.js';
import ItemCount from "./ItemCount";

const ItemList = ({productos}) => {

    return(
        productos.map((producto)=>{

            return (                           
                    <Item producto={producto} count={<ItemCount stock={producto.stock} initial={1}/>}/>                                 
            )
    
        },[])
    )
 
}

export default ItemList
