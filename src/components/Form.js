import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            name:'',
            price: 0,
            img: ''
        }
        this.reset = this.reset.bind(this)
    }

    nameHandler(value){
        this.setState({
            name: value
        })
    }

    priceHandler(value){
        this.setState({
            price: value
        })
    }

    imgHandler(value){
        this.setState({
            img: value
        })
    }

    reset(){
        this.setState({
            name:'',
            price: 0,
            img: ''
        })
    }

    addProduct(name, price, img){
        const newProduct = {
            name,
            price,
            img
        }
        axios.post('/api/product', newProduct).then(
            this.props.getInventory(), this.reset()
        );
    }

    render(){
        const {name, price, img} = this.state
    return (
        <div>
            <input 
                type="name" 
                value={this.state.name} 
                onChange={(e) => this.nameHandler(e.target.value)}></input>
            <input 
                type="number" 
                value={this.state.price} 
                onChange={(e) => this.priceHandler(e.target.value)}></input>
            <input 
                type="text" 
                value={this.state.img} 
                onChange={(e) => this.imgHandler(e.target.value)}></input>
            <button 
                onClick={() => this.reset()}>Cancel</button>
            <button
                onClick={() => this.addProduct(name, price, img)}
            >Add To Inventory</button>
        </div>
    )
    }
};