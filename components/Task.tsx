import React, { useEffect, useState } from "react";

type props = {
  task: Task;
};

const Task = ({ task }: props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="font-weight-bold">{task.title}</div>
        <p>{task.content}</p>
      </div>
    </div>
  );
};

export { Task };
