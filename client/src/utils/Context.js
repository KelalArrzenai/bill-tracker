import React, { useReducer, useContext } from "react";
import API from "./API";

const UserContext = React.createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      API.createUser(action.data)
        .then((result) => {
          console.log('CREATE RESULT', result);
          return { ...state, user: result };
        })
        .then((state) => {console.log('INITIAL STATE', state)})
        .catch(err => console.log(err));
      break;  
    case 'get':
      API.getUser(state.email)
        .then(result => {
          return { ...state, result };
        })
        .then(() => console.log(state))
        .catch(err => console.log(err));
      break;  
    default:
      return state;
  }
};

const UserProvider = ({ value = null, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { user: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
