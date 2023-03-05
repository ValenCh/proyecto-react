import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

//componentes
import { ItemList } from '../ItemList/ItemList'

//firebase
import { getProductos } from '../../firebase/firebase'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()

    useEffect(() => {
        if(idCategoria) {
            getProductos()
            
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === idCategoria)
                const productsList = ItemList({products}) 
                setProductos(productsList)
            })
        } else {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = ItemList({products}) 
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}