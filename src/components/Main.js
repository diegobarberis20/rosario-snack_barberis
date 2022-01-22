import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import productosJSON from "./../productos.json"
import { Routes, Route } from "react-router-dom";

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer productosJSON={productosJSON}/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
      
    )
}

export default Main
