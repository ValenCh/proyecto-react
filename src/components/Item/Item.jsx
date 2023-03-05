import { Link } from "react-router-dom"
export const Item = ({item}) => {
  return (
    <div className="card cardProducto border-light">
        <img src={`${item.img}`} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
        <div className="card-body cardBody">
            <h5 className="card-title">{item.nombre} {item.modelo}</h5>
            <p className="card-text">{item.marca}</p>
            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            <button className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>Ver producto </Link></button>
            </div>
       </div>
  
    )
  }