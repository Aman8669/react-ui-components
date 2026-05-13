import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import axios from 'axios'

import "./Style/button.css";
import "./Style/Content.css";

const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    console.log(response.data);

    setData(response.data);
  }

  return (
    <>
      <Navbar />

      {/* Cards Section */}
      {/* 
      <div className="cards">
        {users.map((el, index) => (
          <Card
            key={index}
            username={el.username}
            city={el.city}
            profession={el.profession}
            about={el.about}
            image={el.image}
          />
        ))}
      </div>
      */}

      <button className='btn' onClick={getData}>
        Get Data
      </button>

      <div className='content'>

        {data.map((el) => {
          return (
            <div className="block" key={el.id}>

              <img src={el.image} alt="" width="150" />

              <h3>{el.title}</h3>

              <h4>₹ {el.price}</h4>

              <div className="card-btn">Add to cart</div>

            </div>
          )
        })}

      </div>
    </>
  )
}

export default App