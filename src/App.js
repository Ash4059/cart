import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';
import db from './firebase';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
      };
  }

  handleIncreaseQty = (product) => {
      const products = this.state.products;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState({
          products
      });
  }

  handleDecraseQty = (product) => {
      const products = this.state.products;
      const index = products.indexOf(product);
      if(products[index].qty)
          products[index].qty -= 1;
      this.setState({
          products
      });
  }

  handleDeleteQty = (id) => {
      const products = this.state.products;
      const item = products.filter((item) => item.id !== id);
      this.setState({
          products : item
      })
  }

  getCartCount = () => {
    const products = this.state.products;
    // console.log(products);
    let count = 0;
    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () =>{
    const products = this.state.products;
    let price = 0;
    products.forEach((product)=>{
      price += product.price*product.qty;
    })
    return price;
  }

  componentDidMount(){
    try {
      const products = collection(db, 'products');
      const q = query(products);
      onSnapshot(q, docsSnap => {
        const productList = [];
        docsSnap.forEach(doc => {
          productList.push(doc.data());
        })
        this.setState({
          products : productList,
          loading : false
        })
      },error=>{
        console.log(error);
      });
      
    } catch (error) {
      console.error("Error:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
    }
  }

  render(){
    const {products,loading} = this.state;
      return (
        <div className="App">
          <Navbar count = {this.getCartCount()} />
          <Cart
            products={products} 
            onIncreaseQty = {this.handleIncreaseQty} 
            onDecreaseQty = {this.handleDecraseQty} 
            onDeleteQty = { this.handleDeleteQty }
          />
          <div>TOTAL: {this.getCartTotal()}</div>
          {loading && <h1>Loading Products...</h1>}
        </div>
      );
    }
}

export default App;
