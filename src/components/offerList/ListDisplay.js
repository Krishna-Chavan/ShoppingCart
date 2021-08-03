import React from 'react'


export default function ListDisplay(props) {
    return (
        <div className="col-md mt-3">
            <div >
                <img src={props.image} alt="Lists" style={{ width: '100px', height: '100px' }} />
                <div>
                    <p className="card-title">{props.title}</p>
                </div>
            </div>
        </div>
    )
}
