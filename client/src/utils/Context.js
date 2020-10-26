import React from 'react';

const UserContext = React.createContext({
  username: '',
  email: '',
  userId: ''
});

export default UserContext;