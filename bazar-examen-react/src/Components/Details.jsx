import React from 'react';
import Slider from 'react-slick';
import Stars from './Stars';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slider.css'

const Details = ({ id, title, brand, description, price, rating, category, images, discountPercentage, stock }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };
  
  return (
    <div className='text-center mt-5'>
      <div className='mb-5 col-6 mx-auto'>
        {images && images.length > 0 && (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img className='slider' src={image} alt={`Product ${index}`} />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <h1 className='mt-2' key={id}>{title}</h1>
      <h3 className='mt-3'>{brand}</h3>
      <h5 className='mt-3'>{category}</h5>
      <h3>{description}</h3>
      <div className='row mt-3'>
        <div className='col-6'>
          <h3>$ {price}</h3>
        </div>
        <div className='col-6 text-center'>
          <Stars rating={rating}/>
        </div>
      </div>
      <h6 className='text-danger'>Descuento: {discountPercentage}%</h6>
      <h6>Stock: {stock}</h6>
      <button className='btn btn-secondary mt-5 btn-lg' type='button'>Comprar</button>
    </div>
  )
}

export default Details