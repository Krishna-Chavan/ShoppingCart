import React,{useState,useEffect} from 'react'
import axios  from 'axios'
import JewellersList from './JewellersList'

export default function Jewellers() {
    const [jewellers, setJewellers] = useState([])

    const fetchJewellers = async ()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`)
                                    .catch(err => console.log('err',err))
        setJewellers(response.data)
    }
    useEffect(()=>{
        fetchJewellers();
    },[])

    return (
        <div className="container">
        <div className="row">
            {
                jewellers.map((items) =>
                  <JewellersList
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
