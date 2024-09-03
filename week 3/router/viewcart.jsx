import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ViewCart() {
    const cartItems= useSelector((state) => state.cart.items || []) ;
    const dispatch= useDispatch();

    // const handleRemove= (id)=>{
    //     dispatch({type: 'REMOVE_ITEM', payload: id});
    // };

    return ( 
        <div>
            <h3>Cart</h3>
            {
                cartItems.length===0?
                (
                    <p>Cart is Empty</p>
                ):
                (
                    cartItems.map(item=>(
                        <div className="col" key={item.id}>
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                            {/* <button onClick={()=>handleRemove(item.id)}>
                                Remove from Cart
                            </button> */}

                            <button onClick={()=> dispatch({
                            type:'REMOVE_ITEM', payload:item.id
                        })}>Remove from Cart</button>
                        </div>
                    ))
                )
            }
        </div>
     );
}

export default ViewCart;