import React from 'react';
import './SingleFood.css'

const SingleFood = ({food}) => {
    console.log(food)
    return (
        <div className='card'>
            <img src={food.strMealThumb} alt="" />
            <h2>{food.strMeal}</h2>
            <button>Add To cart</button>
        </div>
    );
};

export default SingleFood;