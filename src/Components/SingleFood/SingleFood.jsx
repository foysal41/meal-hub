import React from 'react';
import './SingleFood.css'

const SingleFood = ({food,addToCart}) => {
    
    return (
        <div className='card'>
            <img src={food.strMealThumb} alt="" />
            <h2>{food.strMeal}</h2>
            <button onClick={()=>addToCart(food)}>Add To cart</button>
        </div>
    );
};

export default SingleFood;