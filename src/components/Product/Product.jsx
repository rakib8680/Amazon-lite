import React from 'react';

const Product = (props) => {
    const {name} = props.children
    console.log(props.children)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Product;