import { useContext, useState } from "react";
import Styles from "@/styles/components/CreateTab.module.scss";
import { Storage } from "@/libs/localStorage";
import { tasksContext } from "@/contexts/tasks";

type props = {
  parent: Tab[];
  tab: Tab;
  close: () => void;
};
const CreateTab = ({ tab, parent, close }: props) => {
  const [title, setTitle] = useState(tab?.title || "");
  const { data } = useContext(tasksContext);
  if (!data) return <></>;
  const register = () => {
    if (tab) {
      tab.title = title;
    } else {
      parent.push({
        type: "tab",
        title,
        isSelected: false,
        childTask: [],
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
        />
        <button onClick={register}>{tab ? "変更" : "追加"}</button>
      </div>
    </>
  );
};
export { CreateTab };
