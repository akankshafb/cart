import React,{useState} from 'react';
import './searchItem.css';
import InputRange from 'react-input-range';

function Modal(props) {
  const [value, setValue] = useState({ min: 10, max: 1000 });
  if(!props.show) {
    return null;
  }
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
  };

  // The modal "window"
  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    width:'100%',
    height:'200px',
    margin: '0 auto',
    padding: 30,
    display:'block',
    top:'200px'
  };

  const footer = {
      bottom: '0',
      paddingTop: '70px'
  };
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <div className="filterHeading"><b>Filters</b></div>
        <InputRange
        maxValue={1000}
        minValue={20}
        value={value}
        onChange={value => setValue(value)} />
        <button class="btn-primary priceApplyBtn" onClick={()=>props.filterDataList(value)}>Apply Now</button>
          <div style={footer}>
            <button onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Modal;
