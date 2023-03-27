import React from 'react';

const Product = (props) => {
    const { name, img, price, seller, quantity, ratings, stock } = props.children
    console.log(props.children)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
                <figure>
                    <img src={img} alt="Shoes" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;