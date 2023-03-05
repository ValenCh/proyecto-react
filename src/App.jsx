import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Toastify
import { ToastContainer } from 'react-toastify';

//componentes
import Navbar from './components/NavBar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

//firebase
//import { updateProducto, deleteProducto } from './firebase/firebase';

//carrito
import { CarritoProvider } from './context/CarritoContext';

function App() {    
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar/>
           <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
           </Routes>
           <ToastContainer/>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
