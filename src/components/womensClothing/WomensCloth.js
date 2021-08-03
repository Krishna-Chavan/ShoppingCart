import React,{useState,useEffect} from 'react'
import axios from 'axios'
import WomensClothsList from './WomensClothsList'

export default function WomensCloth() {
    const [womens, setWomens] = useState([])
    const fetchWomensCloth = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`)
            .catch(err => console.log('err', err))
        setWomens(response.data)
    }
    useEffect(() => {
        fetchWomensCloth();
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    womens.map((items) =>
                      <WomensClothsList
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
