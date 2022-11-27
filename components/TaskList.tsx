import React from "react";

type props = {
  tasks: Task[];
};

type TaskItempronps = { task: Task };
// TaskItemチェックボックスとか削除ボタン
function TaskItem({ task }: TaskItempronps) {
  return (
    <li>
      {/* チェックボックス */}
      <label>
        <input type="checkbox" className="checkbox-input" />
        <span className="checkbox-label">{task.title}</span>
      </label>
      {/* 削除ボタン */}
      <button className="btn is-deleted">削除</button>
    </li>
  );
}

const TaskList = ({ tasks }: props) => {
  const list = tasks.map((task) => (
    <li key={task.title}>
      <TaskItem task={task} />
    </li>
  ));

  function ClickList() {
    alert(list);
  }

  return (
    <>
      <div className="TaskList">
        {tasks.length <= 0 ? "登録されていません" : <ol>{list}</ol>}
      </div>
    </>
  );
};

export { TaskList };

// TaskListの表示
// const TaskList: React.FC<props> = ({ tasks }) => {
//     return <>
//         <div className="inner">
//             {
//                 tasks.length <= 0 ? "登録されていません" :
//                     <ul className="task-list">
//                         {
//                             tasks.map(task => (
//                                 <TaskItem
//                                     key={task.expired}
//                                     task={task}
//                                 />

//                             ))
//                         }
//                     </ul>
//             }
//         </div>
//     </>;
// };
// export { TaskList };
