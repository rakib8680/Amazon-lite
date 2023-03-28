import React from 'react';

const Cart = ({ cart }) => {

    // console.log(cart)


    // price function 
    // shipping function 
    let total = 0;
    let shippingFee = 0;

    for (const product of cart) {
        total = total + product.price
        shippingFee = shippingFee + product.shipping
    };

    const tax = (total * 7) / 100;

    console.log(tax)

    return (
        <div>
            <p className='text-3xl font-semibold text-center'>Order Summery</p>
            <div className='text-lg mt-10 space-y-6'>
                <h2>Selected Items : {cart.length}</h2>
                <h2>Total Price : ${total}</h2>
                <h2>Total Shipping Charge : ${shippingFee}</h2>
                <h2>Tax : ${tax}</h2>
            </div>
            <h1>Grand Total: </h1>
        </div>
    );
};

export default Cart;