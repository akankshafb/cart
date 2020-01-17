import React,{useState} from 'react';
import './searchItem.css';
import InputRange from 'react-input-range';

function PriceFilter(props) {
  const [value, setValue] = useState({ min: 10, max: 1000 });
    return (
      <div className="priceFilter d-none d-sm-block">
       <div className="filterHeading"><b>Filters</b></div>
        <InputRange
        maxValue={1000}
        minValue={20}
        value={value}
        onChange={value => setValue(value)} />
        <button className="btn-primary priceApplyBtn" onClick={()=>props.filterDataList(value)}>Apply Now</button>
      </div>
    );
  }

export default PriceFilter;