import { Secciones } from "./Secciones/Secciones";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navColor">
            <div className="container-fluid">
                <a className="navbar-brand Logo" href="#"><img src="./img/logo.png" alt="Logo" className="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <Secciones/>
            </div>
      </nav>
    );
}

export default Navbar;
