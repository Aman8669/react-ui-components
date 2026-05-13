import React from 'react'
import "../Style/Card.css"

const Card = (props) => {

  return (
    <div className="card-container">

      <img src={props.image} alt='User Image' />

      <div className="card-content">

        <h2>{props.username}</h2>

        <h5>{props.city}</h5>

        <h3>{props.profession}</h3>

        <p>{props.about}</p>

        <button><a href="#">View Profile</a></button>

      </div>

    </div>
  )
}

export default Card