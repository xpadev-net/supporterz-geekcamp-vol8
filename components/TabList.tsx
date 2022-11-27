import { MouseEventHandler, useContext } from "react";
import { tasksContext } from "@/contexts/tasks";
import Styles from "@/styles/components/TabList.module.scss";

type props = {
  tabs: Tab[];
  onClick?: MouseEventHandler<HTMLDivElement>;
};
const TabList = ({ tabs, onClick }: props) => {
  const { isMobile } = useContext(tasksContext);

  return (
    <ul className={`${Styles.TabList} ${isMobile && Styles.mobile}`} >
      {tabs.map((tab) =>
        <li>
          <div
            className={`${tab.isSelected && Styles.selected}`}
            onClick={onClick}
          >
            {tab.isSelected}
          </div>
        </li>)}
      <li>
        <button>+</button>
      </li>
    </ul>
  )
};
export { TabList };
