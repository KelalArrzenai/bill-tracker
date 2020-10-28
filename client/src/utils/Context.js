import React, { useReducer, useContext } from "react";
import API from "./API";

const UserContext = React.createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  if (action.type === "set") {
    API.createUser(action.data)
      .then((result) => {
        return { ...state, user: result };
      })
      .catch((err) => console.log(err));
  }
  return state;
};

const UserProvider = ({ value = null, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { User: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
