import React from 'react';

export default function Product(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.product.name}</h1>
            <p>{props.product.price}</p>
            <img className="product-img" alt='productimg' src={props.product.img}/>
        </div>
    )
};