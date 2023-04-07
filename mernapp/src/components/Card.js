import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    const [qty, setQty] = useState(1);

    const handleAddToCart = async()=>{
        await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.productName, price:finalPrice, qty: qty, img: props.foodItem.image})
        console.log(data)
    }
    // console.log(props.foodItem.price);
    let finalPrice = qty * parseInt(props.foodItem.price);   //This is where Price is changing
    // useEffect(()=>{
    //     setQty(priceRef.current.value)
    // }, [])
    
    return (
        
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "height": "600px" }}>
                    <img src={props.foodItem.image} class="card-img-top" alt="..." height="65%" style={{"paddingTop":"15px"}} />
                    <div className="card-body">
                        <div style={{"height":"50px"}}><h5 className="card-title" >{props.foodItem.productName}</h5></div>
                        
                        
                        <div className='container w-100' style={{"padding-top":"15px"}}>Quantity: {props.foodItem.quantity}
                            <select className='m-2 h-20 bg-success rounded' ref={priceRef} onChange={(e) => setQty(e.target.value)} >
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            {/* <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select> */}
                            <div className='d-inline w-100 fs-5'>
                            ₹{finalPrice}/-
                            </div>
                        </div>
                        <hr></hr>
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                    
                </div>

            </div>

        
    )
}
