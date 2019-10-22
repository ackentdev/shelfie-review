import React from 'react';
import Product from './Product'

export default function Dashboard(props) {
    const mappedProducts = props.inventory.map(product => {
        return(<Product product={product}/>)
    })
    return (
        <div>
            {mappedProducts}
        </div>
    )
};