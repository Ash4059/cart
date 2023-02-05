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

    render(){
        const products = this.state.products;
        return(
            <div className="cart">
                {
                    products.map((product) =>{
                        return <CartItem product={product} key={product.id} />
                    })
                }
            </div>
        );
    }
}

export default Cart;