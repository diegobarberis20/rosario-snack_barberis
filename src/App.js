import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./components/CartContext";
import { ToastContainer } from 'react-toastify';

function App(){

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <ToastContainer autoClose="2000"/>                
            </BrowserRouter>    
        </CartContext>
    )
}

export default App;



