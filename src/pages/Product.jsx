import React, { useState } from 'react'
import "../Style/Button.css"
import "../Style/Content.css"
import "../Style/Card.css"
import axios from 'axios'

const Product = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    console.log(response.data);

    setData(response.data);

  }
  return (
    <>
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

export default Product
