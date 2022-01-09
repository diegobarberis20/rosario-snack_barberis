import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import productosJSON from "./../productos.json"
import { Routes, Route } from "react-router-dom";

const Main = ({ saludo }) => {

    // const productoJSON =  {
    //     "name": "Maní Cris Jor",
    //     "descripcion": "Estos son los mejores manies saborizados",
    //     "imagen": "https://drive.google.com/uc?export=view&id=17g19-05CXrUKKIGYr6ktKSEm1k94-L7Y",
    //     "precio": 150
    // }

    return (
        <main>

            <h1>{saludo}</h1>
            <h2>otro</h2>

            {/* RUTAS */}
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer productosJSON={productosJSON}/>}/>
                <Route path="/carrito" element=""/>
            </Routes>

        </main>

       
    )
}

export default Main
