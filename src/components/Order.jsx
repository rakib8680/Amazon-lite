import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart, removeFromDb } from '../assets/utilities/fakedb';
import Cart from './Cart/Cart';
import OrderReview from './OrderReview';
import './Shop/Shop.css'

const Order = () => {

    const products = useLoaderData()
    // console.log(products)

    const [cart, setCart] = useState(products);
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



    // new cart after deleting items 
    const deleteCartItems = (id) => {
        const remaining = cart.filter(items => items.id !== id)
        setCart(remaining)
        removeFromDb(id)

    }


    return (
        <div className='Shop-Container flex lg:grid flex-col-reverse mb-20'>

            {/* product  */}
            <div className='gap-14 mx-auto mt-20 md:mt-32 px-2  md:px-0'>
                <h1 className='mb-5'>Orders product : {cart.length}</h1>
                {
                    cart.map(product => <OrderReview product={product} key={product.id} deleteCartItems={deleteCartItems}></OrderReview>)
                }
            </div>

            {/* cart  */}
            <div className='bg-orange-200 rounded-b-3xl md:sticky top-0  p-7 md:w-5/6  py-12  h-fit'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;