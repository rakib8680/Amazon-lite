import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { id, name, img, price, seller, ratings, } = props.product
    const addToCart = props.addToCart

    return (
        <>
            <div className="card card-compact md:w-96 bg-base-100 shadow-xl p-3">
                <figure>
                    <img  className='w-full' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">{name}</h2>
                    <p className='font-semibold text-lg'>Price: ${price}</p>
                    <div className='mt-10 space-y-4'>
                        <p className='font-semibold text-gray-700'>Manufacturer : {seller}</p>
                        <p className='font-semibold text-gray-700'>Rating : {ratings} star</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button onClick={() => addToCart(props.product)} className="btn btn-accent bg-orange-300 w-full text-orange-700 hover:text-orange-300">Buy Now  <FontAwesomeIcon className='pl-2' icon={faShoppingCart} /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;