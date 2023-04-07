import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {

  //yaha par use state me default value iski array lere hai kyuki agar object lete to uspe map function nai laga pate
  const [item_category, setItem_category] = useState([]);
  const [flours, setFlours] = useState([]);

  const loadData = async () => {

    let response = await fetch("http://localhost:5000/api/food-data", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setFlours(response[0]);
    setItem_category(response[1]);
    //kyuki backend se ek variables ki array arie toh usko access krne k lie
    //console.log(response[0], response[1])

  }

  useEffect(() => {
    loadData()
  }, [])
  //  ^ yaha par empty array yani empty dependency dene ka ye matlb 
  //hai ki on first render jo bhi useeffect me functions die hai wo load hojae
  return (
    //we can send only one div in return and if we want multiple divs we need nested divs
    <div>

      <div> <Navbar /> </div>
      <div> <Carousel /> </div>
      <div className='container'>
        {
            item_category !==[]
            ? item_category.map((data)=>{
                return (
                  <div> Hello friends </div>
                )
            })
            :<div>kuch nai aya</div>
        }
        <Card />
      </div>
      <div><Footer /></div>
    </div>
  )
}
