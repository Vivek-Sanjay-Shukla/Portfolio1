import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail,link}) => {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading} </span>
        <span>{detail} </span>
        <a href={link}><button className='c-button'>Link</button></a>
    </div>
  )
}

export default Card