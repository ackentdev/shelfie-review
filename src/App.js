import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
  }
  componentDidMount(){
    this.getInventory()
  }

  getInventory(){
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  render(){
  return (
    <div className="App">
      <Form getInventory={this.getInventory}/>
      <Dashboard getInventory={this.getInventory} inventory={this.state.inventory}/>
    </div>
  );
  }
}

export default App;
