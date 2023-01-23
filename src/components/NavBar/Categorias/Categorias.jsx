const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalogo </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item text-center" href="#">0KM</a></li>
                    <li><a className="dropdown-item text-center" href="#">Usados</a></li>
                </ul>
            </li>
       </>
    );
}

export default Categorias;
