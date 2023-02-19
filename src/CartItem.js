import React from "react";

const CartItem = (props) => {
    const {price,title,qty,img} = props.product;
    const {product,onIncreaseQty,onDecreaseQty,onDeleteQty} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="cart" src={img} />
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
                        onClick={() => onIncreaseQty(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
                        onClick={() => onDecreaseQty(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                        onClick={() => onDeleteQty(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;