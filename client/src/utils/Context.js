import React from 'react';

const UserContext = React.createContext({
  username: '',
  email: '',
  userId: '',
  onSubmit: () => undefined
});

export default UserContext;