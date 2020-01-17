import React from 'react';

class ModalSort extends React.Component {
render() {
    if(!this.props.show) {
      return null;
    }

    // The Gray background
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
        paddingTop: '30px'
    };

    const paddingStyle={
        paddingTop:'10px',
        paddingBottom:'10px'
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <div className="filterHeading"><b>Sort By</b></div>
         <div className="col-sm-12 text-left" style={paddingStyle} onClick={this.props.sortHightoLow}>Price -- High Low</div>
         <div className="col-sm-12 text-left" style={paddingStyle} onClick={this.props.sortLowtoHigh}>Price -- Low High</div>
         <div className="col-sm-12 text-left" style={paddingStyle}>Discount</div>
          <div style={footer}>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSort;

