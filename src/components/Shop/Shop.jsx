import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
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






    // Add to cart function 
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    };

    // delete all cart items  
    const deleteAllCartItems = () => {
        setCart([])
        deleteShoppingCart()
    }




    return (
        <div className='Shop-Container flex lg:grid flex-col-reverse '>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 mx-auto mt-32'>
                {
                    products.map(product => <Product
                        key={product.id}
                        addToCart={addToCart}
                        product={product}
                    ></Product>)
                }
            </div>


            <div className='bg-orange-200 rounded-b-3xl  p-7 md:w-5/6 md:sticky top-20 py-12  h-fit'>
                <Cart cart={cart} deleteAllCartItems={deleteAllCartItems}></Cart>
            </div>
        </div>
    );
};

export default Shop;