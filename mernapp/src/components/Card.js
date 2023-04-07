import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "height": "450px" }}>
                    <img src={props.imgSrc} class="card-img-top" alt="..." height="65%" style={{"padding-top":"10px"}} />
                    <div className="card-body">
                        <div style={{"height":"50px"}}><h5 className="card-title" >{props.foodName}</h5></div>
                        
                        
                        <div className='container w-100' style={{"padding-top":"15px"}}>Quantity: {props.quantity}
                            <select className='m-2 h-20 bg-success rounded' >
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
                                <p>Total Price</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
