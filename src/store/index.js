// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }



// import {createStore, combineReducers} from 'redux';
//  import {loadState,saveState} from './localStorage'
// // //import listReducer from 


// // // const reducer = (state)=>{
// // //     saveToLocalStorage(state);
// // // }
// // // const rootReducer=combineReducers({
// // //     list:''
// // // })
// // // const persistedState=loadState();
// // // const store=()=>createStore(
// // //     persistedState
// // // );

// // // store.subscribe(()=>{
// // //     saveState(store);
// // // })

// // const store = createStore(state);

// const store =()=> createStore(loadState());

// store.subscribe(() => {
//     saveState(store.getState());
// });
// export default store;
