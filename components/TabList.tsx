import { MouseEventHandler, useContext } from "react";
import { tasksContext } from "@/contexts/tasks";
import { Tab } from "@/components/Tab";
import Styles from "@/styles/components/TabList.module.scss";

type props = {
  tabs: Tab[];
  onClick?: MouseEventHandler<HTMLDivElement>;
};
const TabList = ({ tabs, onClick }: props) => {
  const { isMobile } = useContext(tasksContext);

  return (
    <div className={`${Styles.TabList} ${isMobile && Styles.mobile}`} >
      {tabs.map((tab) =>
        <Tab
          className={`${tab.isSelected && Styles.selected}`}
          onClick={onClick}
        >
          {tab.isSelected}
        </Tab>
      )}
      <div>
        <button>+</button>
      </div>
    </div>
  )
};
export { TabList };
