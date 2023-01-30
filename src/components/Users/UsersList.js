import React from "react";

import Card from "./UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.userList.map((user, i) => {
          return (
            <li key={i}>
              {user.username} ({user.age} year old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
