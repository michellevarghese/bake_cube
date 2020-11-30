/*import {createStore} from "redux";

const store=createStore(()=>{});
export default store;

*/
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import  {applyMiddleware, createStore} from "redux";

const store =createStore(rootReducer,applyMiddleware(thunk));

export default store;
