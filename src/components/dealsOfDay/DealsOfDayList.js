import React from 'react'
import CountDownTimer from '../timer/CountDownTimer'
import DealsOfDay from './DealsOfDay'

export default function DealsOfDayList() {
    const dealsOfDay = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyImzBLq7qr9-87ijREAG90BwfaY_MXgSzRw&usqp=CAU',
            title: 'stylish watch for men',
            price: 199,
            category: 'mens watches'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFM30aSeMzM3G_hRBlp3EAT2iW3gKBi2-cDw&usqp=CAU',
            title: 'rose gold watch for women',
            price: 29.9,
            category: 'womens watches'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtw1m4tMz2dPxHNDxcU-HfhtisQ3DxZUEvJdV5IGAUBqOGvPyW72DsdhvAEFAYSiUPE38&usqp=CAU',
            title: 'Vintege Midi dress for women',
            price: 109,
            category: 'cloths for womens'
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-shgoRNC2_blX29doQTJQh7bC6FqjljBcg&usqp=CAU',
            title: 'Mens suites',
            price: 180,
            category: 'Mens clothings'
        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CzuppOKP6pQOkagC3crc33IbxmZIHv9xVg&usqp=CAU',
            title: 'casual shoes',
            price: 50,
            category: 'Mens shoes'
        },
        {
            id: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaHDwsUpjGs1qWoDQDXXAgJ4Vt2380XDvBA&usqp=CAU',
            title: 'slippers',
            price: 20,
            category: 'womens slippers'
        }
    ]
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Deals of the Day</a>
                    <a class="navbar-brand"><CountDownTimer/></a>
                    <form class="d-flex">
                        <button class="btn btn-outline-primary" type="submit">View All</button>
                    </form>
                </div>
            </nav>
            <hr />
            <div className="container">
                <div className="row">
                    {
                        dealsOfDay.map((product) =>
                            <DealsOfDay
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                category={product.category}
                            />
                        )
                    }
                </div>
            </div>
            <hr />
        </div>
    )
}
