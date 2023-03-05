import { Categorias } from "../Categorias/Categorias";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
export const Secciones = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav secciones">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={"/servicios"}>Servicios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/venta"}>Venta</Link>
                </li>
                <Categorias/>
                <li className="nav-item">
                  <Link className="nav-link" to={"/nosotros"}>Nosotros</Link>
                </li>
                <CartWidget/>
            </ul>
        </div>
    );
}

 
