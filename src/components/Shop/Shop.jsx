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
        <div className='Shop-Container'>
            <div>
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