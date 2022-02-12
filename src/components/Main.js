import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import Footer from "./Footer";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";

const Main = () => {

    return (
        <>
         <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>  
        </main>
        
        </>
       
      
    )
}

export default Main
