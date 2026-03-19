import React from 'react';

const Cart = ({carts}) => {
    console.log(carts)
    return (
        <div>
            {
                carts.map(cart => <p>{cart.strMeal}</p> )
            }
        </div>
    );
};

export default Cart;