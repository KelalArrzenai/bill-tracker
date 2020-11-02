import React, { useReducer, useContext } from "react";
import { Redirect } from 'react-router-dom';
import API from "./API";
import { useReducerAsync } from "use-reducer-async";

const UserContext = React.createContext();
const { Provider } = UserContext;
const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_USER':
      console.log(action.data);
      return { ...state, user: action.data };
        // .then((result) => {
        //   console.log('CREATE RESULT', result.data);

        //   localStorage.setItem('User', result.data);
        //   return { ...state, user: result.data };
        // })
        // .then((state) => {console.log('INITIAL STATE', state);})
        // .catch(err => console.log(err));
      break;  
    case 'get':
      // const getResult = await API.getUser(action.data.email);
      // return { ...state, user: getResult.data };
        // .then((result) => {
        //   console.log('GET RESULTS', result);
        //   localStorage.setItem('User', JSON.stringify(result.data));
        //   return { ...state, user: result.data };
        // })
        // .then((state) => console.log('GET INITIAL', state))
        // .catch(err => console.log(err));
      break;  
    default:
      return state;
  }
};
const asyncActionHandlers = {
  set: ({ dispatch }) => async (action) => {
    const result = await API.createUser(action.data);
    console.log(result.data);
    dispatch({type: "SET_USER", data: result.data});
  }
}

const UserProvider = ({ value = null
//   {_id:"5f9c612bf3353008d8b1d238", 
//   firstName:"test", 
//   lastName:"test", 
//   email:"test@test.com", 
//   password:"password"
// }
, ...props }) => {
  const [state, dispatch] = useReducerAsync(reducer, { user: value }, asyncActionHandlers );

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
