import React from 'react';

export default class Form extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            name:'',
            price: 0,
            imgurl: ''
        }
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
            imgurl: value
        })
    }

    reset(){
        this.setState({
            name:'',
            price: 0,
            imgurl: ''
        })
    }
    render(){
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
                value={this.state.imgurl} 
                onChange={(e) => this.imgHandler(e.target.value)}></input>
            <button 
                onClick={() => this.reset()}>Cancel</button>
            <button>Add To Inventory</button>
        </div>
    )
    }
};