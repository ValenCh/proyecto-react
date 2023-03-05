
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../../context/CarritoContext";

export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    const cantidadItems = getItemQuantity();
    return (
        <>
         <li className="nav-item">
            {cantidadItems > 0 ?
                <Link className="nav-link text-center" to={'/cart'} id="carrito">
                    <span className="cantCarrito">{cantidadItems}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                :
                <span className="nav-link text-center disabled" id="carrito">
                    <i className="fa-solid fa-cart-shopping"></i>
                </span>
            }
         </li>   
        </> 
    );
}