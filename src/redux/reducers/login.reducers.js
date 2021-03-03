
// import {combineReducers} from 'redux';
// let initialState ={
//   username:''
// }
// export const geod = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return {...state,geod:action.persons};
//     // case 'CLOSE_GEOD':
//       // return {};
//     // case 'USER_GET':
//     //   return {...state,username:action.data}
//     default:
//       return state;
//   }
// };

// export const reducers = combineReducers({
// geod,
// });
const userReducer = ( state={get:''}, action) => {

  console.log("reducer",action);
  console.log('data load', state);
  switch (action.type) {
      case 'FETCH_REQUEST':
          return {...state,get: action.data};
          default:
              return state;
  }
};
export default userReducer;

