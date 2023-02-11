import React, { useState } from "react";
import { useRef } from "react";
import useHttp from "./../hooks/use-http";

const NewTask = () => {
  let nameRef = useRef();
  const { isLoading, error, sendRequest: addTask } = useHttp();

  const submitHandler = async (event) => {
    event.preventDefault();

    const taskText = nameRef.current.value;

    addTask(
      {
        url: "http://localhost:3000/tasks",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: { name: taskText },
      },
      (resp) => {
        console.log(resp);
      }
    );
  };

  return (
    <div style={{ marginTop: "2%", paddingLeft: "20%" }}>
      <form onSubmit={submitHandler}>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading..</p>}

        <input ref={nameRef} type="text" placeholder="Enter Title" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTask;
