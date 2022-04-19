import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className='card'>
        <img className='card-img' src={item.img} alt="" />
        <div className="card-info">
            <div className="card-title">{item.title}</div>
            <Link to='/products'>
              <button className='card-btn'>Shop Now</button>
            </Link>
        </div>
    </div>
  )
}

export default CategoryItem