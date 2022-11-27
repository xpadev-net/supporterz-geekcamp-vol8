import { useContext, useState } from "react";
import Styles from "@/styles/components/Create.module.scss";
import { Storage } from "@/libs/localStorage";
import { tasksContext } from "@/contexts/tasks";

type props = {
  parent: Task | Tab;
  task?: Task;
  close: () => void;
};
const CreateTask = ({ task, parent, close }: props) => {
  const [title, setTitle] = useState(task?.title || "");
  const [content, setContent] = useState(task?.content || "");
  const [expired, setExpired] = useState(task?.expired);
  const [progress, setProgress] = useState((task as TaskNoChild)?.progress);
  const { data } = useContext(tasksContext);
  if (!data) return <></>;
  const register = () => {
    if (task) {
      task.title = title;
      task.content = content;
      task.expired = expired;
      if (task.type === "taskNoChild") {
        task.progress = progress;
      }
    } else {
      if (parent.type === "taskNoChild") {
        parent = (function (item) {
          item.type = "taskChild";
          delete (item as unknown as TaskNoChild).progress;
          return item;
        })(parent as unknown as TaskChild);
      }
      (parent.childTask as Task[]).push({
        type: "taskNoChild",
        title,
        content,
        expired,
        progress,
        isSelected: false,
      });
    }
    Storage.set(data);
  };
  return (
    <>
      <div className={Styles.background} onClick={close}></div>
      <div className={Styles.wrapper}>
        <input
          type="text"
          className={Styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"タイトル"}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={"内容"}
        />
        <input
          type="datetime-local"
          value={expired}
          onChange={(e) =>
            setExpired(
              e.target.value === ""
                ? undefined
                : new Date(e.target.value).getTime
            )
          }
        />
        {task?.type !== "taskChild" && (
          <input
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            placeholder={"進捗(%)"}
            type={"number"}
          />
        )}
        <button onClick={register}>{task ? "変更" : "追加"}</button>
      </div>
    </>
  );
};
export { CreateTask };
