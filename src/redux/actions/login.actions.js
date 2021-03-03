import axios from 'axios';
export const  userGetFetch = () => {
  console.log('data.get');
  return async dispatch => {
  await axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('qwer',res);
        dispatch({
          type: 'FETCH_REQUEST',
          data:res.data
        })
        
      
      })
}
}

// const userGetFetch = () => {
//   console.log('33333333333333');
//   return async dispatch => {
//   await fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((response) => response.json())
//   .then((data) =>
//   dispatch({
//   type: 'FETCH_REQUEST',
//   data,
//   })
//   );
//   }
//   }

// export default userGetFetch;






// export const userGet=(data) => {
//   console.log('data.get',data);
//   return async dispatch => {
//     dispatch({
//       type: 'USER_GET',
//       data,
//     })
    
//   }
// }



