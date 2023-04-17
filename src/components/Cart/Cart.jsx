import React from 'react';

const Cart = ({ cart, deleteAllCartItems, children }) => {

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
            <div className='clear-cart-btn' onClick={deleteAllCartItems} >
                <button>Clear Cart</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
            <div>
                {children}
            </div>
            
        </div>
    );
};

export default Cart;