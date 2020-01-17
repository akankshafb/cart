const dataList = async ()=>{
    let response = await fetch(
        `https://api.myjson.com/bins/qzuzi`
    )
    console.log("Serivce");
    let data = response.json();
    return data;

}

export default dataList;
