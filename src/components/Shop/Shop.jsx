import React, { useEffect, useState } from 'react';
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


    // Add to cart function 
    const addToCart = (product) => {
        const newCart = [...cart];
        setCart(newCart);
    }



    return (
        <div className='Shop-Container flex lg:grid flex-col-reverse '>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 px- mx-auto mt-32'>
                {
                    products.map(product => <Product
                        key={product.id}
                        addToCart={addToCart}
                    >{product}</Product>)
                }
            </div>

            <div className='bg-orange-200'>
                <p>Order Summery</p>
            </div>
        </div>
    );
};

export default Shop;