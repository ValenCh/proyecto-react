import './App.css';
import Navbar from './NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
     <Navbar/>
     <ItemListContainer itemList={"Bienvenido!!!!"}/>
    </>
  );
}

export default App;
