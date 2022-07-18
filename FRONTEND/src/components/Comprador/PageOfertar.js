import { useState, useEffect } from "react"
import axios from "axios"
import SpinnerLoader from "../Spinner"
import PostsListOfertar from "./PostListOfertar"
import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from "../../reducer/reducer"
import Navbar from './navbarComprador'



const store = configureStore({
    reducer: ProductReducer
  })

export const listProductsEnCarrito = []
export const listProductsEnCarrito2 = []
export const variable = []

export function PageOfertar () {
    const [loaded, setDataLoaded] = useState(false)
    const [ProductsData, setProductsData] = useState([])

    const addProduct = (product) => {
        store.dispatch({ type: 'ADD', product })
        alert(`Producto agregado: ${product.name}`)
        axios.post('http://localhost:3001/publicaciones/id/3', {
            id: product.id
          })
          .then(function (response) {
            variable.push( response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
        listProductsEnCarrito.push(product)
        //console.log(ProductsData2)
        axios.get('http://localhost:3001/publicaciones/id/3')
        .then(response => {
            // Obtenemos los datos
            listProductsEnCarrito2.push(response.data)
        })
        .catch(e => {
            // Capturamos los errores
        })


    }

    useEffect(() => {
        const fetchData = async () => {
            if (!loaded) {
                const result = await axios.get('http://localhost:3001/publicaciones/id/3')
                if (result.data) {
                    setDataLoaded(true)
                    setProductsData(result.data)
                }
            }
        }
        fetchData()
    })

    store.subscribe(() => {
        console.log(store.getState())
    })

    return (
        <div className="App">
            <Navbar/>
            <SpinnerLoader dataLoaded={loaded} />
            <PostsListOfertar products={ProductsData} onAdd={addProduct} />
        </div>
    )
}