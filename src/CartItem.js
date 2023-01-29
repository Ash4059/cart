import React from "react";

class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price: 999,
            title: "phone",
            qty: 1,
            img: ""
        }
    }

    increaseQty = ()=>{
        this.setState({qty : this.state.qty + 1});
    }

    decreaseQty = ()=>{
        this.setState({qty : this.state.qty - 1});
    }

    deleteQty = ()=>{
        this.setState({qty : 0});
    }

    render(){
        const {price,title,qty,img} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="cart" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:"#777"}}>Rs {price}</div>
                    <div style={{color: "#777"}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" 
                            onClick={this.increaseQty}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
                            onClick={this.decreaseQty}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                            onClick={this.deleteQty}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;