import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function
  () {
  return (
    <div>

      <div> <Navbar /> </div>

      <div>

        <div className="card mt-3" style={{ "width": "18rem", "maxHeight" : "360px" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">this is some text</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success rounded' >
                {Array.from(Array(6), (e, i)=>{
                  return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                  )
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      <div><Footer /></div>
    </div>
  )
}
