import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className='card'>
        <img className='card-img' src={item.img} alt="" />
        <div className="card-info">
            <div className="card-title">{item.title}</div>
            <button className='card-btn'>Shop Now</button>
        </div>
    </div>
  )
}

export default CategoryItem