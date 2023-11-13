import React from 'react'

const Stars = ({ rating }) => {
    const roundedRating = Math.round(rating);
    const filledStars = [];
    const emptyStars = [];

    for (let i = 0; i < roundedRating; i++)
    {
        filledStars.push(<i className="fa fa-star fa-2x" aria-hidden="true" style={{ color: '#ffd700' }}></i>);
    }

    for (let i = roundedRating; i < 5; i++) {
        emptyStars.push(<i className="fa fa-star fa-2x" aria-hidden="true" style={{ color: '#ccc' }}></i>);
      }

    return (
        <div>
            {filledStars}
            {emptyStars}
        </div>
    )
}

export default Stars