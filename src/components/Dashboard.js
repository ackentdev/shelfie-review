import React from 'react';
import Product from './Product'

export default function Dashboard(props) {
    const mappedProducts = props.inventory.map((product, index) => {
        return(
        <div key={index}>
            <Product product={product}/>
        </div>
        )
    })
    return (
        <div>
            {mappedProducts}
        </div>
    )
};