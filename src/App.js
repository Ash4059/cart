import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products:[
            {
                price: 99,
                title: "Watch",
                qty: 3,
                img: "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2019/02/samsung-gear-sport-collection.png?itok=6tjfgm_B",
                id: 1
            },
            {
                price: 999,
                title: "Mobile phone",
                qty: 10,
                img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662439543/Croma%20Assets/Communication/Mobiles/Images/248910_2_pt4gfr.png/mxw_2048,s_webp,f_auto",
                id: 2
            },
            {
                price: 1999,
                title: "Laptop",
                qty: 2,
                img: "https://th.bing.com/th/id/OIP.0gujFK-r2VTYB11343WBIgHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7",
                id: 3
            }
        ]
      }
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

  render(){
    const products = this.state.products;
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
      </div>
    );
  }
}

export default App;
