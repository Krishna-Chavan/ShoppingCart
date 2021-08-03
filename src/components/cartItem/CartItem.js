import React from 'react'

export default function CartItem(props) {
    const {cartItems,onAdd,onRemove} = props;
    return (
        <div>
            <h2>Cart Items</h2>
            <div>{cartItems.length ===0 && <div>cart is empty</div>}</div>
            {
                cartItems.map((item)=>{
                    <div key={item.id} className="row">
                        <div>{item.name}</div>
                        <div>
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onClick={()=>onRemove(item)} className="remove">-</button>
                        </div>
                        <div>
                            {cartItems.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                })
            }
        </div>
    )
}
