import React from 'react';

const Cart = ({ cart }) => {

    // console.log(cart)


    // price function 
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }


    // shipping function 
    
    return (
        <div>
            <p className='text-3xl font-semibold text-center'>Order Summery</p>
            <div className='text-lg mt-10 space-y-6'>
                <h2>Selected Items : {cart.length}</h2>
                <h2>Total Price : {total}$</h2>
                <h2>Total Shipping Charge : {cart.length}</h2>
                <h2>Tax : {cart.length}</h2>
            </div>
        </div>
    );
};

export default Cart;