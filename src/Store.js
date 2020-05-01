import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const initState = {
  lists: null,
  time: new Date().getTime()
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LIST_SUCCESS":
        return {
          ...state,
          lists: action.payload,
          time: new Date().getTime()
        }

    default:
      return state;
  }
}

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
