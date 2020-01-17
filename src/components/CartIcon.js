import React from 'react';
import './searchItem.css';
import { Link } from 'react-router-dom';
import imageCart from '../images/cart.png';


function CartIcon(props) {
    return (
      <div className="cartSection">
         <Link to={
                            {
                                pathname: '/OrderSummary',
                            }
                        } className="GoToLink">
                            <span className="itemCount">{props.totalCount}</span>
                            <img src={imageCart} width="50" height="50" className="cartImage" />
                        </Link>
      </div>
    );
  }

  export default CartIcon;