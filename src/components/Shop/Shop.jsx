import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);





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






    // Add to cart function 
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id)
    };

    // delete all cart items  
    const deleteAllCartItems = () => {
        setCart([])
        deleteShoppingCart()
    }




    return (
        <div className='Shop-Container flex lg:grid flex-col-reverse '>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 mx-auto mt-32 p-4 md:p-0'>
                {
                    products.map(product => <Product
                        key={product._id}
                        addToCart={addToCart}
                        product={product}
                    ></Product>)
                }
            </div>


            <div className='bg-orange-200 rounded-b-3xl  p-7 md:w-5/6 md:sticky top-20 py-12  h-fit'>
                <Cart cart={cart} deleteAllCartItems={deleteAllCartItems}>
                    <Link to='/order' className='checkout-btn' >
                        <button>Review Orders</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;