import React from 'react'
import FurnitureList from './FurnitureList'

export default function Furniture() {
    
    const furnitures = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqp-yfvcN-oCMg0gS1BsfwfN9Sex-7VQHSEQ&usqp=CAU',
            title: 'sofa',
            price: 199,
            category: 'Furinitures'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAFb5WE9i6xLm-0xHHuq9QdMvvoBKHq0U-g&usqp=CAU',
            title: 'Dining Table',
            price: 109,
            category: 'Furnitures'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ElY6phHBlkwVIy6MEilQPFSK0j1wr66Rzw&usqp=CAU',
            title: 'bed',
            price: 299,
            category: 'Furnitures'
        },
        {
            id: 4,
            image: 'https://shagunarts.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/1/51-2xbped6l._sl1000_.jpg',
            title: 'table',
            price: 99,
            category: 'Furnitures'
        },
        {
            id: 5,
            image: 'https://i.pinimg.com/564x/6b/96/68/6b9668fbaaa3e64ac9d21da7c0c987cd.jpg',
            title: 'study table',
            price: 150,
            category: 'Furnitures'
        },
        {
            id: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fhVkrI4DuoiiWH2LSZC6ku8CGtzxnnFwAg&usqp=CAU',
            title: 'livingroome',
            price: 899,
            category: 'Furnitures'
        }
    ]

    return (
        <div className="container">
        <div className="row">
            {
                furnitures.map((items) =>
                  <FurnitureList
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
