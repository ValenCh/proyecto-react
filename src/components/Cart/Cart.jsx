import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    
    return (
        <>
            { carrito.length === 0 
              ? // Si el carrito está vacío
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </>
              : // Si el carrito tiene productos
                <div className="container cartContainer">
                    <ItemList products={carrito} plantilla={'itemCart'}/>
                    <div className="divButtons container mt-2">
                        <div className="d-flex flex-center mb-4">
                            <h5 className="mt-3  mx-auto">Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around mb-5">
                            <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button> 
                            <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        </div>
                    </div>
                </div>
            }
        </>
    )
}





