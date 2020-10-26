import React, { useEffect, useState, } from 'react';
import API from "../utils/API";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {

  }, []);

  function deleteUser(id) {
    API.deleteUser(id)
      .then(() => console.log())
      .catch(err => console.log(err));
  }

  function handleSubmit(event) {
    const { name, value } = event.target;
  }
}

export default User;