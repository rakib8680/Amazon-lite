import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../assets/utilities/fakedb';
import Cart from './Cart/Cart';
import OrderReview from './OrderReview';
import './Shop/Shop.css'

const Order = () => {

    const products = useLoaderData()
    const [cart, setCart] = useState(products);
    // get product using the id from local storage 
    useEffect(() => {

        const savedCart = []

        const storedCart = getShoppingCart();

        // step-1 get id 
        for (const id in storedCart) {

            // step-2  get product by using id
            const addedProduct = products.find(product => product._id === id);

            // step-3 get quantity 
            const quantity = storedCart[id];

            if (addedProduct) {
                addedProduct.quantity = quantity

                //step-4 push the addedProduct into saved card 
                savedCart.push(addedProduct)
            }
        }
        // step-5 set the cart 
        setCart(savedCart)
    }, [products])



    // new cart after deleting items 
    const deleteCartItems = (id) => {
        const remaining = cart.filter(items => items._id !== id)
        setCart(remaining)
        removeFromDb(id)
    };


    // delete all cart items  
    const deleteAllCartItems = () => {
        setCart([])
        deleteShoppingCart()
    }




    return (
        <div className='Shop-Container flex lg:grid flex-col-reverse mb-20'>

            {/* product  */}
            <div className='gap-14 mx-auto mt-20 md:mt-32 px-2  md:px-0'>
                <h1 className='mb-5'>Orders product : {cart.length}</h1>
                {
                    cart.map(product => <OrderReview product={product} key={product._id} deleteCartItems={deleteCartItems}></OrderReview>)
                }
            </div>

            {/* cart  */}
            <div className='bg-orange-200 rounded-b-3xl md:sticky top-0  p-7 md:w-5/6  py-12  h-fit'>
                <Cart cart={cart} deleteAllCartItems={deleteAllCartItems}>
                    <Link to='/checkout' className='checkout-btn' >
                        <button>Proceed Checkout</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;