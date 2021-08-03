import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ElectronicsList from './ElectronicsList'

export default function Electronics() {
    const [electronics, setElectronics] = useState([])

    const fetchElectronics = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`)
                                    .catch(err => console.log('err',err))
        setElectronics(response.data)
    }
    useEffect(()=>{
        fetchElectronics();
    },[])
    return (
        <div className="container">
        <div className="row">
            {
                electronics.map((items) =>
                  <ElectronicsList
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
