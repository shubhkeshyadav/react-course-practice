import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const [formData, setFormData] = useState({
    name: "",
    opening_text: "",
    date: "",
  });

  const inputChangeHandler = () => {};

  const [msg, setMsg] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
    const movie = {
      id: Math.floor(Date.now() / 1000),
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    const response = await fetch("http://localhost:3000/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "Application/Json",
      },
    });

    if (response.status !== 201) {
      setMsg({ type: "error", msg: "Error something went wrong" });
    } else if (response.status == 201) {
      setMsg({ type: "success", msg: "Movie added successfully" });
      props.fetchMoviesHandler();
    } else {
      setMsg({ type: "error", msg: "Error something went wrong" });
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea name="opening_text" rows="5" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input required type="date" name="date" ref={releaseDateRef} />
      </div>
      <div className={classes.control}>
        <button
          onClick={props.hideMoveAddFormHandler}
          style={{ marginRight: "10px", background: "red" }}
        >
          Cancel
        </button>
        <button>Add Movie</button>
      </div>
      {msg && (
        <h2 style={{ color: msg.type == "error" ? "red" : "green" }}>
          {msg.msg}
        </h2>
      )}
    </form>
  );
}

export default AddMovie;
