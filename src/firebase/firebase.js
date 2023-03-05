import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHseGM-obyZxeXAe48J9_7gJTWfUC-5wc",
  authDomain: "proyecto-react-56684.firebaseapp.com",
  projectId: "proyecto-react-56684",
  storageBucket: "proyecto-react-56684.appspot.com",
  messagingSenderId: "61467355789",
  appId: "1:61467355789:web:cd7783e3e112af534b90c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) //Consultar la BDD
/*
    CRUD PRODUCTOS (operaciones que puedo hacer con mi base de datos)
    CREATE
    READ
    UPDATE
    DELETE
*/

const cargarBDD = async () => {
    const promise = await fetch('./json/autos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"products"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export const getProductos = async() => {
    const productos = await getDocs(collection(db, "products"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "products", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info) =>{
    await updateDoc(doc(db, "products", id), info)
}

export const deleteProducto = async(id) =>{
    await deleteDoc(doc(db, "products", id))
}