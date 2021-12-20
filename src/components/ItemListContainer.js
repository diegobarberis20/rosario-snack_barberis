import ItemCount from "./ItemCount";

const ItemListContainer = (greeting) => {
    // console.log(greeting);
    return (
        <>
            <h1>{greeting.saludo}</h1>
            <ItemCount stock={8} initial={1}/>
            
            <ItemCount stock={4} initial={1}/>
        </>
    )
}

export default ItemListContainer
