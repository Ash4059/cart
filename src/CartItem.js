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
        this.setState((previousState)=>{ return { qty : previousState.qty + 1}});
    }

    decreaseQty = ()=>{
        this.setState((previousState)=>{ if(previousState.qty) return { qty : previousState.qty - 1}});
    }

    deleteQty = ()=>{
        this.setState({qty : 0});
    } 

    render(){
        const {price,title,qty,img} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="cart" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662439543/Croma%20Assets/Communication/Mobiles/Images/248910_2_pt4gfr.png/mxw_2048,s_webp,f_auto" />
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