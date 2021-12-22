import Item from './Item.js';
import ItemCount from "./ItemCount";

const ItemList = ({productos}) => {

    const resp = productos.map((producto)=>{

        return (                           
                <Item producto={producto} count={<ItemCount stock={producto.stock} initial={1}/>}/>                                 
        )

    },[])

    return(
        resp
    )
 
}

export default ItemList
