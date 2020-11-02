import React, { useReducer, useContext } from "react";
import { Redirect } from 'react-router-dom';
import API from "./API";
import { useReducerAsync } from "use-reducer-async";

const UserContext = React.createContext();
const { Provider } = UserContext;
const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.data };
        // .then((result) => {
        //   console.log('CREATE RESULT', result.data);

        //   localStorage.setItem('User', result.data);
        //   return { ...state, user: result.data };
        // })
        // .then((state) => {console.log('INITIAL STATE', state);})
        // .catch(err => console.log(err));
    case 'GET_USER':
      return { ...state, user: action.data };
        // .then((result) => {
        //   console.log('GET RESULTS', result);
        //   localStorage.setItem('User', JSON.stringify(result.data));
        //   return { ...state, user: result.data };
        // })
        // .then((state) => console.log('GET INITIAL', state))
        // .catch(err => console.log(err)); 
    case 'GET_BILLS':
      return { ...state, bills: action.data };

    case 'SET_BILL':
      action.dispatch({type: 'getBills', userId: action.id});
      return state;
    case 'UPDATE_BILL':
      action.dispatch({type: 'getBills', userId: action.id});
      return state;
      
    case 'REMOVE_BILL':
      action.dispatch({type: 'getBills', userId: action.id});
      return state;
    default:
      return state;
  }
};
const asyncActionHandlers = {
  set: ({ dispatch }) => async (action) => {
    const result = await API.createUser(action.data);
    console.log(result.data);
    dispatch({type: "SET_USER", data: result.data});
  },
  get: ({ dispatch }) => async (action) => {
    const result = await API.getUser(action.data.email);
    console.log(result.data);
    dispatch({type: "GET_USER", data: result.data});
  },
  setBill: ({ dispatch }) => async (action) => {
    const result = await API.saveBill(action.data);
    console.log(result.data);
    dispatch({type: "SET_BILL", data: result.data, id: action.id, dispatch});
  },
  getBills: ({ dispatch }) => async (action) => {
    const result = await API.getBills(action.userId);
    console.log(result.data);
    dispatch({type: "GET_BILLS", data: result.data});  
  },
  updateBill: ({ dispatch }) => async (action) => {
    const result = await API.updateBill(action.billId);
    console.log(result.data);
    dispatch({type: "UPDATE_BILL", data: result.data, id: action.id, dispatch});
  },
  removeBill: ({ dispatch }) => async (action) => {
    const result = await API.deleteBill(action.billId);
    console.log(result.data);
    dispatch({type: "REMOVE_BILL", data: result.data, id: action.id, dispatch});
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
