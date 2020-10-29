import React, { useReducer, useContext } from "react";
import API from "./API";

const UserContext = React.createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      API.createUser(action.data)
        .then(result => {
          return { ...state, user: result };
        })
        .catch(err => console.log(err));
    case 'get':
      API.getUser(state)
        .then(result => {
          return { ...state, user: result };
        })
        .then(() => console.log(state))
        .catch(err => console.log(err));
    default:
      return state;
  }
};

const UserProvider = ({ value = null, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { User: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
