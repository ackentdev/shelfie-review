import React from 'react';

export default function Product(props) {
    return (
        <div>
            <h1>{props.product.name}</h1>
            <p>{props.product.price}</p>
            <img className="product-img" alt='productimg' src={props.product.img}/>
            <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
        </div>
    )
};