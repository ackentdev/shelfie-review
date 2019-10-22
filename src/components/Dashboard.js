import React from 'react';
import axios from 'axios';
import Product from './Product'

export default function Dashboard(props) {
    
    const deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then(
            props.getInventory()
        )
    }

    const mappedProducts = props.inventory.map((product, index) => {
        return(
        <div key={index}>
            <Product deleteProduct={deleteProduct} product={product}/>
        </div>
        )
    })
    return (
        <div>
            {mappedProducts}
        </div>
    )
};