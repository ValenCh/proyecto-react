export const CartWidget = ({cantCarrito}) => {
    return (
        <>
         <li className="nav-item">
            <a data-bs-toggle="modal" data-bs-target="#carritoModal" className="nav-link text-center" href="#" id="carrito">
                <p className="cantCarrito">{cantCarrito}</p>
                <i className="fa-solid fa-cart-shopping"></i>
            </a>
            
         </li>   
        </>
    );
}
