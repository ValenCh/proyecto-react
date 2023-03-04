import { initializeApp } from "firebase/app";
import {getFirestore, collection,addDoc} from 'firebase/firestore'

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
const db = getFirestore() //Consultar la BDD
/*
    CRUD PRODUCTOS (operaciones que puedo hacer con mi base de datos)
    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async () => {
    const promise = await fetch('./json/autos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"productos"), {
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