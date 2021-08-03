import React from 'react'
import './ProductDisplay.css'

export default function ProductDisplay(props) {
    // const {products,onAdd} = props;
    return (
        <div className="container mt-3 ast-p">
            <div className="row">
                {/* <div className="col-md-4 mt-3"> */}
                <div className="card">
                    <img src={props.image} alt={props.title} style={{ width: '200px', height: "200px" }} />
                    <div className="card-body">
                        <h5 className="card-text">${props.price}</h5>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.category}</p>
                    </div>
                    <div className="btn-wrapper item">
                        <button >Add To Cart</button>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
