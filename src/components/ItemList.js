import Item from './Item.js';

const ItemList = ({productos}) => {

    return(
        productos.map((producto, indice)=>{
    
                return (                           
                    <Item key={indice} producto={producto}/>                                 
                )

        },[])
    )
}

export default ItemList
