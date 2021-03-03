import { applyMiddleware, createStore, } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/login.reducers';


// export const store ;
export function configureStore(initialState = {}) {
    const middlewares = [thunk];
    const store = createStore(userReducer,applyMiddleware(...middlewares));
    return store;
  };
  
  export const store = configureStore();
