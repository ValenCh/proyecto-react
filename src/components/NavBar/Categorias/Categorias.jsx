import { Link } from "react-router-dom";
export const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalogo </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item text-center" to={"/category/0km"}>0KM</Link></li>
                    <li><Link className="dropdown-item text-center" to={"/category/usados"}>Usados</Link></li>
                </ul>
            </li>
       </>
    );
}


