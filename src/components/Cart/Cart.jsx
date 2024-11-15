import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
  let messege;
  if(cart.length === 0){
    messege = <p>Please add some Product</p>
  }
  else{
    messege = <div>
      <h3>WOW</h3>
      <p><small>Keep Shopping</small></p>
    </div>
  }
  return (
    <div>
      <h2>Order summary: {cart.length}</h2>
      {cart.length > 2 ? <span className=''>You buy 2 and more T-shirt</span> : <span>You Buy 2 or less than 2 T-Shirt</span>}
      {messege}
      {
        cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} 
        <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button> 
        </p>)
      }
      {
        cart.length === 2 && <p>Buy 2 T-Shirt and get one Free!!!</p>
      }
      {
        cart.length === 3 || <p>If You Buy 3 T-Shirt you get 25% discount Today</p>
      }
    </div>
  );
};

export default Cart;