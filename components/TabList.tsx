import { useContext } from "react";
import { tasksContext } from "@/contexts/tasks";
import Styles from "@/styles/components/TabList.module.scss";

type props = {
  tabs: Tab[];
};
const TabList = ({ tabs }: props) => {
  const { isMobile } = useContext(tasksContext);

  return (
    <div>
      <ul className="TabList">
        {tabs.map((tab) => <li>{tab.title}</li>)}
        <li>
          <button>+</button>
        </li>
      </ul>
    </div>
  )
};
export { TabList };
