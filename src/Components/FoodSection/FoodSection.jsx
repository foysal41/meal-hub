import React, { use, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import './FoodSection.css'
import Cart from '../Cart/Cart';
 import { ToastContainer, toast } from 'react-toastify';

const FoodSection = ({ foodDataRes }) => {
    const data = use(foodDataRes)
    const foods = data.meals;



    const [carts, setCart] = useState([])

    const addToCart = (foodData) => {
        
        setCart([...carts, foodData])
    }
    

    const handleOrder = () => {
        setCart([])
        toast("Your Order been added")
    }

    return (
        <div className='food-container-parent'>
            <div className='foods-container'>
                {
                    foods.map(food => <SingleFood addToCart={addToCart} food={food}></SingleFood>)
                }
            </div>

            <div className='cart-container' style={{ backgroundColor: 'cyan' }}>
               <h2>Cart</h2>
               <Cart carts ={carts}></Cart>
               <button onClick={handleOrder}>Order </button>
               <ToastContainer />
            </div>
        </div>
    );
};

export default FoodSection;