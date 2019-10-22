import React from 'react';

export default function Product(props) {
    return (
        <div>
            <h1>{props.product.name}</h1>
            <p>{props.product.price}</p>
            <img alt='productimg' src={props.product.imgurl}/>
        </div>
    )
};