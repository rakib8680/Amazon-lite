import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../assets/utilities/fakedb';
import Cart from './Cart/Cart';
import './Shop/Shop.css'

const Order = () => {

    const products = useLoaderData()
    // console.log(products)

    const [cart, setCart] = useState([]);

    // get product using the id from local storage 
    useEffect(() => {

        const savedCart = []

        const storedCart = getShoppingCart();

        // step-1 get id 
        for (const id in storedCart) {

            // step-2  get product by using id
            const addedProduct = products.find(product => product.id === id);

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


    return (
        <div className='Shop-Container flex lg:grid flex-col-reverse '>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 mx-auto mt-32'>
                <h1>Orders page : {cart.length}</h1>
            </div>
            <div className='bg-orange-200   p-7 md:w-5/6  py-12  h-fit'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;