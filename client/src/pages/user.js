import React, { useEffect, useState } from 'react';
import API from "../utils/API";
import formObject from "@material-ui/core";


function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {

  }, []);

  function deleteUser(id) {
    API.deleteUser(id)
      .then(() => console.log())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };
}

export default User;