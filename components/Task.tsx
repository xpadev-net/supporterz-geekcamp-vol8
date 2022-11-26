import React, { useEffect, useState } from "react";

type props = {
  task: Task;
};
const Task = ({ task }: props) => {
  return <></>;
};
export { Task };

export const TestUseState = () => {
  const [TaskName, setTaskName] = useState<string>();
  const [TaskMonth, setTaskMonth] = useState<string>();
  const [TaskDate, setTaskDate] = useState<string>();
  const [TaskDesc, setTaskDesc] = useState<string>();

  useEffect(() => {
    setTaskName("Task1");
    setTaskMonth("1");
    setTaskDate("1");
    setTaskDesc("ここにタスクの内容を入れてください");
  }, []);

  return (
    <div className="m-3 col-4">
      <div className="card">
        <div className="card-body">
          <div>タスク：{TaskName}</div>
          <div>
            {TaskMonth}/{TaskDate}
          </div>
          <p>{TaskDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default TestUseState;
