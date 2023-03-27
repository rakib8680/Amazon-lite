import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // console.log(products)

    return (
        <div className='Shop-Container mt-32'>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 px- mx-auto'>
                {
                    products.map(product => <Product key={product.id}>{product}</Product>)
                }
            </div>

            <div>
                <p>Order Summery</p>
            </div>
        </div>
    );
};

export default Shop;