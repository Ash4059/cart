import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products:[
                {
                    price: 99,
                    title: "Watch",
                    qty: 3,
                    img: "",
                    id: 1
                },
                {
                    price: 999,
                    title: "Mobile phone",
                    qty: 10,
                    img: "",
                    id: 2
                },
                {
                    price: 1999,
                    title: "Laptop",
                    qty: 2,
                    img: "",
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

    render(){
        const products = this.state.products;
        return(
            <div className="cart">
                {
                    products.map((product) =>{
                        return <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQty = {this.handleIncreaseQty} 
                            onDecreaseQty = {this.handleDecraseQty} 
                            onDeleteQty = { this.handleDeleteQty }
                        />
                    })
                }
            </div>
        );
    }
}

export default Cart;