import React from 'react';

const Cart = ({ cart }) => {

    // console.log(cart)


    // price function 
    // shipping function 
    let total = 0;
    let shippingFee = 0;
    let quantity = 0;

    for (const product of cart) {
        product.quantity = product.quantity || 1
        total = total + product.price * product.quantity;
        shippingFee = shippingFee + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    };

    // tax
    const tax = (total * 7) / 100;

    // grand total 
    const grandTotal = total + shippingFee + tax


    return (
        <div>
            <p className='md:text-3xl text-2xl font-semibold text-center'>Order Summery</p>
            <div className=' text-lg mt-10 space-y-6'>
                <h2>Selected Items : {quantity}</h2>
                <h2>Total Price : ${total}</h2>
                <h2>Total Shipping Charge : ${shippingFee}</h2>
                <h2>Tax : ${tax}</h2>
            </div>
            <h1 className='text-2xl mt-10 font-semibold'>Grand Total : ${grandTotal.toFixed(2)} </h1>
        </div>
    );
};

export default Cart;