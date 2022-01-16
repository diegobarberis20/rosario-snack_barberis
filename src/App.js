import NavBar from "./components/NavBar";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import CartContext from "./components/CartContext";

function App(){

    const saludoInicial = "Hola desde el E-commerce!";
    const productoJSON =  {
                            "name": "Maní Cris Jor",
                            "descripcion": "Estos son los mejores manies saborizados",
                            "imagen": "https://drive.google.com/uc?export=view&id=17g19-05CXrUKKIGYr6ktKSEm1k94-L7Y",
                            "precio": 150
                     }

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar/>
                <Main/>
            </BrowserRouter>             
        </CartContext>
    )
}

export default App;



