import { useContext } from "react";
import { tasksContext } from "@/contexts/tasks";
import Styles from "@/styles/components/TabList.module.scss";

type props = {
  tabs: Tab[];
};
const TabList = ({ tabs }: props) => {
  const { isMobile } = useContext(tasksContext);

  return (
    <ul className={`${Styles.TabList} ${isMobile && Styles.mobile}`}>
      {tabs.map((tab) =>
        <li className={`${tab.isSelected && Styles.selected}`}>
          {tab.isSelected}
        </li>)}
      <li>
        <button>+</button>
      </li>
    </ul>
  )
};
export { TabList };
