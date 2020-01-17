import React from 'react';
import './searchItem.css';

function AddToCartBtn(props) {
    return (
      <div className="addToCartDiv">
      <button className="btn-primary addToCartBtn" onClick={()=>props.addTocartFunc()}>Add to cart</button>
      </div>
      
    );
  }

  export default AddToCartBtn;