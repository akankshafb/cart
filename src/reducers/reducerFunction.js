var initialState={
    itemList:[],
    cartData:[]
};
const reducerFunction=(state=initialState,{type,payload})=>{
    switch(type){
        case "GET_ITEMS_LIST": 
        return {
            ...state,
            itemList : payload
        }
        case "ADD_TO_CART":
            return {
                   ...state,
                   cartData : payload
             }
         case "GET_SEARCH_LIST"   :
            return {
                ...state,
                itemList : payload
          }
            default:
                return state;
    }

   
}
export default reducerFunction;

