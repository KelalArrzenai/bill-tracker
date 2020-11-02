import React, { useReducer, useContext } from "react";
import { Redirect } from 'react-router-dom';
import API from "./API";

const UserContext = React.createContext();
const { Provider } = UserContext;
const reducer = (state, action) => {

  switch (action.type) {
    case 'set':
      API.createUser(action.data)
        .then((result) => {
          console.log('CREATE RESULT', result);

          localStorage.setItem('User', result.data);
          return { ...state, user: result.data };
        })
        .then((state) => {console.log('INITIAL STATE', state);})
        .catch(err => console.log(err));
      break;  
    case 'get':
      API.getUser(action.data.email)
        .then((result) => {
          console.log('GET RESULTS', result);
          localStorage.setItem('User', JSON.stringify(result.data));
          return { ...state, user: result.data };
        })
        .then((state) => console.log('GET INITIAL', state))
        .catch(err => console.log(err));
      break;  
    default:
      return state;
  }
};

const UserProvider = ({ value = null
//   {_id:"5f9c612bf3353008d8b1d238", 
//   firstName:"test", 
//   lastName:"test", 
//   email:"test@test.com", 
//   password:"password"
// }
, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { user: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
