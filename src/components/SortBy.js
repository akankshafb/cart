import React from 'react';
import './searchItem.css';

function SortBy(props) {
    return (
      <div className="sorting d-none d-sm-flex">
         <div className="col-sm-2 left-align"><b>Sort By</b></div>
         <div className="col-sm-2" onClick={props.sortHightoLow}>Price -- High Low</div>
         <div className="col-sm-2" onClick={props.sortLowtoHigh}>Price -- Low High</div>
         <div className="col-sm-2">Discount</div>
      </div>
    );
  }

export default SortBy;