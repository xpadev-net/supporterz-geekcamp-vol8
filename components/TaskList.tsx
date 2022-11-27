import React from "react";

type props = {
<<<<<<< HEAD
  tasks: Task[];
  task: Task;
=======
    tasks: Task[];
>>>>>>> 1b35be3 (修正したやつです)
};

type TaskItempronps = { task: Task; }
// TaskItemチェックボックスとか削除ボタン
<<<<<<< HEAD
function TaskItem(task: props) {
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
=======
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
    )
>>>>>>> 1b35be3 (修正したやつです)
}

const TaskList = ({ tasks }: props) => {
  const list = tasks.map((task) => <TaskItem key={task.title} task={task} />);

<<<<<<< HEAD
  function ClickList() {
    alert(list);
  }

  return (
    <>
      <div className="TaskList">
        {tasks.length <= 0 ? (
          "登録されていません"
        ) : (
          <ol>
            <li onClick={ClickList}>{list}</li>
          </ol>
        )}
      </div>
    </>
  );
=======
    const list = tasks.map((task) =>
        <li key={task.title}>
            <TaskItem

                task={task} />
        </li>
    );

    function ClickList() {
        alert(list);
    }

    return <>
        <div className="TaskList">
            {
                tasks.length <= 0 ? "登録されていません" :
                    <ol>
                        {list}
                    </ol>
            }
        </div>
    </>;
>>>>>>> 1b35be3 (修正したやつです)
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
