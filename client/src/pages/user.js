import React, { useState, } from 'react';
import API from "../utils/API";

function User() {
  const [user, setUser] = useState([]);

  function deleteUser(id) {
    API.deleteUser(id)
      .then(() => console.log())
      .catch(err => console.log(err));
  }
}

export default User;