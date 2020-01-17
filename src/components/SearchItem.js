import React, { Component } from 'react';
import './searchItem.css';
import ItemList from './ItemList';
import imageLogo from '../images/Plain_Yellow_Star.png'
import { addToCart,getItemList,getSearchList } from '../actions/actionFunction';
import { connect } from 'react-redux';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartIcon from './CartIcon';


class SearchItem extends Component {
    constructor(props) {
        super(props);
        var dataList = JSON.parse(localStorage.getItem('dataList'));
        var totalCount = 0;
        if (dataList === null) {
            totalCount = 0;
        } else {
            dataList.map((item) => {
                totalCount = totalCount + item.qty;
            });
        }

        this.state = {
            count: totalCount,
            dataList: [],
            orderListNew: [],
            totalCountNew: [],
            isOpen: false,
            isOpenSort: false,
            searchData: [],
            searchFlag:false,
            searchInput:''
        }
        this.searchInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (e) => {
        if(e.target.value===''){
            this.props.getSearchList(this.state.searchInput);
        }else{
            this.setState({searchInput: e.target.value});
        }
        
    }
    handleClick = (e) =>{
        this.props.getSearchList(this.state.searchInput);
    }
    componentDidUpdate() {
        var dataList = JSON.parse(localStorage.getItem('dataList'));
        var totalCount = 0;
        if (dataList === null) {
            totalCount = 0;
        } else {
            dataList.map((item) => {
                totalCount = totalCount + item.qty;
            });
        }
        this.getCount(totalCount);
    }
    getCount(totalCount) {
        setTimeout(() => {
            this.setState({
                count: totalCount
            })
        }, 1000)
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div className="row HeaderStyle">
                    <div className="col-sm-4 left-align col-2">
                        <img src={imageLogo} className="logoImage" />
                    </div>
                    <div className="col-sm-4 col-8">
                        <div className="input-group">
                            <input type="text" className="form-control" onChange={this.handleChange} onKeyPress={this.handleChange} ref={this.searchInput} placeholder="Search Item" />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" onClick={this.handleClick} type="button">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-2">
                        <CartIcon totalCount={count}></CartIcon>
                    </div>
                </div>
                <div className="d-inline">
                    <ItemList childHandler={(e) => { this.childHandlerFunc(e) }} searchData={this.state.searchData} searchFlag={this.state.searchFlag} />
                </div>
                <div className="">
                    <div className="container">
                        <p className="copyright">@Copyright</p>
                    </div>
                </div>

            </div>
        );
    }
}
const mapDispatchToProps = {
    addToCart,
    getItemList,
    getSearchList
}
const mapStateToProps = (state) => {
    return {getSearchList:state.data.itemList,state};
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
