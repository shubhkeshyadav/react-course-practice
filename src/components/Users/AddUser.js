import React, { useState, useRef } from "react";
import Card from "./UI/Card";
import "./AddUser.css";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";
import UsersList from "./UsersList";

const AddUser = () => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const submitBtnRef = useRef();

  const [userList, setUserList] = useState([
    {
      username: "Shubhkesh",
      age: 25,
    },
  ]);

  const [formData, setFormData] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value.trim();
    const age = ageRef.current.value.trim();

    let process = true;
    if (username < 1) {
      setError({
        title: "Username error",
        msg: "Username can not left blank",
      });
      process = false;
    } else if (age < 1) {
      setError({
        title: "Age error",
        msg: "Age can not left blank",
      });
      process = false;
    } else if (formData.age < 18) {
      setError({
        title: "Age error",
        msg: "Age should be greater than 17",
      });
      process = false;
    }

    if (process) {
      setUserList([formData, ...userList]);
      //usernameRef.current.value = "";
      //ageRef.current.value = ""; // we can use like this
      setFormData({
        username: "",
        age: "",
      });
      usernameRef.current.style.border = "solid thin green";
      ageRef.current.style.border = "solid thin green";
    }
  };

  const changeHandler = (event) => {
    let obj = { ...formData };
    obj[event.target.name] = event.target.value;
    setFormData(obj);
  };

  const onErrorConfirm = () => {
    setError(null);
  };

  return (
    <Card className="input">
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onErrorConfirm={onErrorConfirm}
        />
      )}
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={changeHandler}
          ref={usernameRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          name="age"
          onChange={changeHandler}
          value={formData.age}
          ref={ageRef}
        />
        <Button type="submit">Add User</Button>
      </form>
      <UsersList userList={userList} />
    </Card>
  );
};

export default AddUser;
