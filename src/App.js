import "bootstrap/dist/css/bootstrap.min.css";
import "./estilos.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App(){

    const saludoInicial = "Hola desde el E-commerce!"

    return (
        <>
            <NavBar/>
            <ItemListContainer saludo={saludoInicial}/>
        </>
    )
}

export default App;



