import React from 'react'
import ListDisplay from './ListDisplay'

export default function OfferList() {
    const addList = [
        {
            id: 1,
            image: 'https://png.pngtree.com/png-clipart/20190925/original/pngtree-independence-day-sale-special-offer-discount-png-image_4979826.jpg',
            title: 'Top Offers'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_qvgkW7-9fm2gqQ4VLa_b5uktaKhvDb-IA&usqp=CAU',
            title: 'Glocery'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOSj9Lote5f3uyMvFdYxhGslXSx_DSmOGGA&usqp=CAU',
            title: 'Mobiles'
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMsSqSis37mxwXaG1NpAUd0D_zG38uUSKBg&usqp=CAU',
            title: 'Fashion'
        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qT4eaBLowY3UqxRaEv36zd_2tE1RcCcrqg&usqp=CAU',
            title: 'Electronics'
        },
        {
            id: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqF4Ha8-NLS5CoKUwPcZk6GI-fjhIW9166MQ&usqp=CAU',
            title: 'Home'
        },
        {
            id: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoO_aelT4CxhrTMv5ilzzloXCmbav2yqYhQ&usqp=CAU',
            title: 'Appliances'
        },
        {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDxqWTIXv07sS7DgkSdqT3tB9lEEUyNCWPA&usqp=CAU',
            title: 'Travel'
        },
        {
            id: 9,
            image: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            title: 'Beauty,Toys..'
        }
    ]
    return (
        <div className="container mt-3">
            <div className="row">
                {
                    addList.map((item) =>
                        <ListDisplay
                            key={item.id}
                            image={item.image}
                            title={item.title}
                        />
                    )
                }
            </div>
        </div>
    )
}
