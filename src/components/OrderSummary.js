import React, { Component} from 'react';
import './orderSummary.css';
class OrderSummary extends Component {
    constructor(props) {
        super(props);
        var dataList=JSON.parse(localStorage.getItem('dataList'));
        var dataListSummary=JSON.parse(localStorage.getItem('dataListSummary'));
        console.log("dataListSummary__",dataListSummary);
        console.log(dataList);
        this.state={
            orderList:dataList,
            totalItem:dataListSummary,
            showTable:true
        }
        this.myQtyRef = React.createRef();
       // console.log("myQtyRef__",this.myQtyRef);
       
    }
 componentDidMount() {
        this.setState({
            orderList:this.state.orderList,
            totalItem:this.state.totalItem
        })
    }
    componentWillMount() {
      
    }
    /* Add quantity */
    changeQty(itemId, task,itemList){
        let itemsCopy = Object.assign([], this.state.orderList);
        let totalItemCopy = Object.assign([], this.state.totalItem);
        itemsCopy.map((item)=>{
            if(item.id==itemId){
                //item.qty=(task == 'add')?parseInt(item.qty)+1:((item.qty!==1)?parseInt(item.qty)-1:parseInt(item.qty));
                if(task=='add'){
                    item.qty=parseInt(item.qty)+1;
                    totalItemCopy.push(item);
                }else{
                    if(item.qty!==1){
                        item.qty=parseInt(item.qty)-1;
                        totalItemCopy.pop(-1);
                    }else{
                        item.qty = parseInt(item.qty);
                    }
                    
                }
                this.setState({
                    totalItem:totalItemCopy,
                     orderList:itemsCopy
                })
                console.log("New List",this.state.totalItem);
            }
            return true;
        })
        
    }
    /* Delete Record */
    deleteProduct(productData){
            var dataList=JSON.parse(localStorage.getItem('dataList'));
            let newDataList=dataList.filter(item=>item.id!==productData.id)
            localStorage.setItem('dataList',JSON.stringify(newDataList));

            var dataListSummary=JSON.parse(localStorage.getItem('dataListSummary'));
            let newDataListSummary = dataListSummary.filter(item=>item.id!==productData.id);
            localStorage.setItem('dataListSummary',JSON.stringify(newDataListSummary));

            if(newDataList.length===0){
                this.setState({
                    showTable:false
                })
            }
       
        this.setState({
            orderList:newDataList,
            totalItem:newDataListSummary,
        })
        
    }

    

    render() {
//        console.log("Location Data",this.props.location.orderListNew);
  const hidden = {
    display: 'none'
};
const visible = {
    display: 'table'
};
  console.log("this.state.orderList__",this.state.orderList);
        var totalItem = this.state.totalItem;
        var totalPrice = 0;
        var totalDiscount = 0;
        var orderTotal = 0;
            for (var i = 0; i < totalItem.length; i++) {
                let afterDiscountPrice = totalItem[i].price - (totalItem[i].price * totalItem[i].discount / 100);
                let discount = totalItem[i].price - afterDiscountPrice;
                totalPrice = (totalPrice + totalItem[i].price)-discount;
                totalDiscount = totalDiscount + discount;
            }
        orderTotal = totalPrice;
        return (
            <div className="container">
                <div className="row HeaderStyle summaryHeader">
                    <div className="col-sm-4">
                        <h2>Order Summary</h2>
                    </div>
                </div>
                <div className="row">
                {this.state.cartItemMsg}
                    <div className="col-sm-8 bgWhite rightBorder">
                        <div style={this.state.showTable?hidden:visible} className="emptyCartMsgDiv">
                            Cart is empty
                            <br/>
                            <b>Please click on back button of browser for shopping.</b>
                        </div>
                        <table className="table" style={this.state.showTable?visible:hidden}>
                            <thead>
                                <tr>
                                    <th>Item({totalItem.length})</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                this.state.orderList.map((orderList, index) => 
                                <tr key={index}>
                                    <td>{orderList.name}</td>
                                    <td>
                                        <input type="button" value="-"className="minusBtn" onClick={(e)=>this.changeQty(orderList.id,'substract',orderList)}/>
                                        <input type="text" value={orderList.qty} readOnly  className="itemQty" ref={this.myQtyRef}/>
                                        <input type="button" className="plusBtn" value="+" onClick={(e)=>this.changeQty(orderList.id,'add',orderList)} />
                                    </td>
                                   <td>{(orderList.price - (orderList.price * orderList.discount / 100))*orderList.qty}</td>
                                    <td>{(orderList.price-(orderList.price - (orderList.price * orderList.discount / 100)))*orderList.qty}</td>
                                    <td><button onClick={(e)=>this.deleteProduct(orderList)}>Delete</button></td>
                                    </tr>)}
                            </tbody>
                        </table>
                        
                    </div>
                    <div className="col-sm-4 bgWhite">
                    <div className="row rightHeadingPrice">
                        <h3 className="rightPriceDetails">Price Details</h3>
                    </div>    
                        <div className="row priceSection">
                            <div className="col-sm-6"><p>Price ({totalItem.length}) Items :</p></div>
                            <div className="col-sm-6"><span className="priceTotal">{totalPrice}</span></div>
                            <div className="col-sm-6"> <p>Discount :</p></div>
                            <div className="col-sm-6"><span className="priceTotal"><span className="priceTotal">{totalDiscount}</span></span></div>
                        </div>
                        <div className="row totalOrder">
                        <div className="col-sm-6"><p><b>Order Total :</b></p></div>
                            <div className="col-sm-6"><span className="priceTotal"><b>{orderTotal}</b></span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderSummary;