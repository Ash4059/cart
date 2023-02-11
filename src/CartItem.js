import React from "react";

class CartItem extends React.Component{
 

    render(){
        const {price,title,qty,img} = this.props.product;
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
                            onClick={() => this.props.onIncreaseQty(this.props.product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
                            onClick={() => this.props.onDecreaseQty(this.props.product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                            onClick={() => this.props.onDeleteQty(this.props.product.id)}
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