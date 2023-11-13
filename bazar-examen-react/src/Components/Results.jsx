import React from 'react'
import { Link } from 'react-router-dom';
import Stars from './Stars';

const Results = ({ id, title, description, price, rating, category, thumbnail}) => {
  
  return (
    <div className='card mt-4' key={id}>
      <div className='row'>
        <div className='col-4'>
          <img src={thumbnail}/>
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-8'>
              <Link to={`/items/${id}`} className='fs-4 text-success'>{title}</Link>
            </div>
            <div className='col-4'>
              <h6 className='text-primary'>{category}</h6>
            </div>
          </div>
          <h6>{description}</h6>
          <h4 className='fst-italic'>$ {price}</h4>
          <Stars rating={rating}/>
        </div>
      </div>
    </div>
  )
}

export default Results