import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductDisplay from './ProductDisplay'
import { Link } from 'react-router-dom'

export default function ProductList() {
    const [products, setProducts] = useState([])
    // const [cartItems, setCartItems] = useState([])
    // const onAdd = (product) => {
    //     const exists = cartItems.find(x => x.id === product.id)
    //     if (exists) {
    //         setCartItems(
    //             cartItems.map((x) => x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x)
    //         )
    //     } else {
    //         setCartItem([...cartItems, { ...product, qty: 1 }])
    //     }
    // }

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        setProducts(response.data);
    }
    useEffect(() => {
        fetchProducts();
    })
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#"></a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/electronics">Electronics</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/mensclothings">Mens Clothings</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/womensclothings">Womens Clothings</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/jewelry">Jewelery</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/furnitures">Home & Furniture</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row">
                {
                    products.map((product) =>
                        <ProductDisplay
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            // onAdd={onAdd(product)}
                        />
                    )
                }
            </div>
            {/* <CartItem onAdd={onAdd} cartItems={cartItem}/> */}
        </div>
    )
}
