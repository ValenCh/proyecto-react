import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//componentes
import Navbar from './components/NavBar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

//firebase
import { cargarBDD } from './firebase/firebase';

function App() {
 cargarBDD()
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
