import React, { useReducer, useContext} from 'react';

const UserContext = React.createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  if (action === 'set') {
    return { User : { ...state } };
  }
  throw new Error('401');
};

const UserProvider = ({ value = null, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { User: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };