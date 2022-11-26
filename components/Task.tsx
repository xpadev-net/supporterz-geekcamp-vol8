type props = {
  task: Task;
};

const Task = ({ task }: props) => {
  return (
    <div className="task-box">
      <div className="taskTitle-box">
        <div className="taskTitle-style">{task.title}</div>
      </div>
      <div className="taskExp-box">
        <div className="taskExp-style">task.expired</div>
      </div>
      <div className="taskCont-box">
        <div className="taskCont-style">{task.content}</div>
      </div>
      <div>task.progress</div>
    </div>
  );
};

export { Task };
