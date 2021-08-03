import React from 'react'
import './Deals.css'

export default function DealsOfDay(props) {
    return (
        // <div className="container mt-3 ast-p">
             
                //  <h2>Deals OF the Day</h2>
                //  <hr />
                 <div className="col-md-2 mt-3"> 
                <div className="card">
                    <img src={props.image} alt={props.title} style={{ width: '164px', height: "200px" }} />
                    <div className="card-body">
                        <h5 className="card-text">${props.price}</h5>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.category}</p>
                    </div>
                     </div>
                </div>
            
        //  </div>
    )
}
