import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//componentes
import Navbar from './components/NavBar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

//import { useEffect } from 'react';
//import { db } from './firebase/firebase';
//import { addDoc, collection, getDocs } from 'firebase/firestore';
//import productos from './autos.json'


//firebase
//import { cargarBDD } from './firebase/firebase';

function App() {
    /*useEffect(()=>{
    const productosCollecction = collection(db, "products")
    productos.map((item)=> addDoc(productosCollecction, item))
   }, [])
 useEffect(()=>{ 
  const coleccionProductos= collection(db, "products")
  getDocs(coleccionProductos)
  .then((result)=> {
    const lista = result.docs.map((producto)=>{
      return{
        id:producto.id,
        ...producto.data()
      }
    })
    console.log(lista)
  })
  .catch((error)=> console.log(error))
  
}, [])
  cargarBDD()
*/
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
