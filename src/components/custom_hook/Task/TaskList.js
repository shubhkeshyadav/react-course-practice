import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import Tasks from "./Tasks";
import useHttp from "./../hooks/use-http";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: getData } = useHttp();

  const receivedData = (data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].name });
    }

    setTasks(loadedTasks);
  };

  const fetchTasks = async () => {
    getData(
      {
        url: "http://localhost:3000/tasks",
      },
      receivedData
    );
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <NewTask />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
};

export default TaskList;
