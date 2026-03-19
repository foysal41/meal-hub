import React, { use } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import './FoodSection.css'

const FoodSection = ({ foodDataRes }) => {
    const data = use(foodDataRes)
    const foods = data.meals;


    return (
        <div className='food-container-parent'>
            <div className='foods-container'>
                {
                    foods.map(food => <SingleFood food={food}></SingleFood>)
                }
            </div>

            <div className='cart-container' style={{ backgroundColor: 'cyan' }}>
               <h2>Cart</h2>
            </div>
        </div>
    );
};

export default FoodSection;