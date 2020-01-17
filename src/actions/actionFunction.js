import services from '../components/services';

export const addToCart = (data) => dispatch => {
    //return { type: "ADD_TO_CART", payload: data };
    /* set data in dataListSummary localStorage */
    const array = [];
    var array2 = [];
    var dataListSummary = JSON.parse(localStorage.getItem('dataListSummary'));
    array2 = dataListSummary;
    if (dataListSummary === null || dataListSummary.length === 0) {
        array.push(data);
        localStorage.setItem('dataListSummary', JSON.stringify(array));
    } else if (dataListSummary.length >= 1) {
        array2.push(data);
        localStorage.setItem('dataListSummary', JSON.stringify(array2));
    }
    /* set data in DataList localStorage */
    const arrayDataList = [];
    let arrayDataList2 = [];
    data.qty = 1;
    var dataList = JSON.parse(localStorage.getItem('dataList'));
    arrayDataList2 = dataList;
    if (dataList === null || dataList === 0) {
        arrayDataList.push(data);
        localStorage.setItem('dataList', JSON.stringify(arrayDataList));
    }
    else if (dataList.length >= 1) {
        var flag = false;
        dataList.map((item) => {
            if (item.id === data.id) {
                // alert("Value Matched");
                flag = true;
                item.qty = item.qty + 1;
            }
        });
        if (flag === false) {
            arrayDataList2.push(data);
        }
        localStorage.setItem('dataList', JSON.stringify(arrayDataList2));
    } else {
        arrayDataList.push(data);
        localStorage.setItem('dataList', JSON.stringify(arrayDataList));
    }
    dispatch({ type: "ADD_TO_CART", payload: data });
}

export const getItemList = () => dispatch => {
    services().then((data) => {
        localStorage.setItem('JsonData', JSON.stringify(data));
        dispatch({ type: "GET_ITEMS_LIST", payload: data });
    })
}

export const getSearchList = (data) => dispatch => {
    var currentDataList = [];
    var newDataList = [];
    if (data !== "") {
        currentDataList = JSON.parse(localStorage.getItem('JsonData'));
        newDataList = currentDataList.filter(item => {
            const lc = item.name.toLowerCase();
            const filter = data.toLowerCase();
            return lc.includes(filter);

        });
        dispatch({ type: "GET_SEARCH_LIST", payload: newDataList });
    } else {
        services().then((data) => {
            localStorage.setItem('JsonData', JSON.stringify(data));
            dispatch({ type: "GET_ITEMS_LIST", payload: data });
        })
    }

}



