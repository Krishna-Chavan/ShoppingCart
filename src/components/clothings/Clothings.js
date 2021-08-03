import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MensCloth from './MensCloth'

export default function Clothings() {
    const [mens, setMens] = useState([])
    const fetchMensCloth = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`)
            .catch(err => console.log('err', err))
        setMens(response.data)
    }
    useEffect(() => {
        fetchMensCloth();
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    mens.map((items) =>
                      <MensCloth
                        key={items.id}
                        image={items.image}
                        price={items.price}
                        title={items.title}
                        category={items.category}
                      />
                    )
                }
            </div>
        </div>
    )
}
