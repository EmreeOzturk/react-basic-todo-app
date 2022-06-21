import React from "react";

const Tasks = (props) => {
  return (
    <div className="tasks">
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>{task} <button onClick={props.handleDelete}>Delete</button></li>
          
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
