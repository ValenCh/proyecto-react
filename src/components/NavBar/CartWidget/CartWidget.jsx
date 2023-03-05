
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../../context/CarritoContext";

export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
         <li className="nav-item">
            <Link className="nav-link text-center" to={'/cart'} id="carrito" >
                 {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                <i className="fa-solid fa-cart-shopping"></i>
            </Link>
         </li>   
        </> 
    );
}
