import React from "react";
import { Task } from "./Task";

// type props = {
//   tasks: Task[];
//   task: Task;
// };

// TaskItemチェックボックスとか削除ボタン
// const TaskItem: React.FC<props> = ({ task }) => {
//   return (
//     <li>
//       <label>
//         <input type="checkbox" className="checkbox-input" />
//         <span className="checkbox-label">{task.title}</span>
//         <button className="btn is-deleted">削除</button>
//       </label>
//     </li>
//   )
// }

// TaskListの表示
// const TaskList: React.FC<props> = ({ tasks }) => {
//   return <>
//     <div className="inner">
//       {
//         tasks.length <= 0 ? "登録されていません" :
//           <ul className="task-list">
//             {
//               tasks.map(task => (
//                 <TaskItem
//                   key={task.expired}
//                   task={task}
//                 />

//               ))
//             }
//           </ul>
//       }
//     </div>
//   </>;
// };
// export { TaskList };
