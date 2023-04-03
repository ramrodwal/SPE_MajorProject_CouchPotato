import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function
  () {
  return (
    //we can send only one div in return and if we want multiple divs we need nested divs
    <div>

      <div> <Navbar /> </div>
      <div> <Carousel /> </div>
      <div className='m-3'>
        <Card />
        </div>
      <div><Footer /></div>
    </div>
  )
}
