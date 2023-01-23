import Categorias from "../Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
const Secciones = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav secciones">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Venta</a>
                </li>
                <Categorias/>
                <li className="nav-item">
                  <a className="nav-link" href="#">Nosotros</a>
                </li>
                <CartWidget cantCarrito={0}/>
            </ul>
        </div>
    );
}

export default Secciones;
