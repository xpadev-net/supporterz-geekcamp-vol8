import { MouseEventHandler, useContext, useState } from "react";
import { tasksContext } from "@/contexts/tasks";
import { Tab } from "@/components/Tab";
import Styles from "@/styles/components/TabList.module.scss";
import { Storage } from "@/libs/localStorage";

type props = {
  tabs: Tab[];
};
const TabList = ({ tabs }: props) => {
  const { isMobile, data } = useContext(tasksContext);
  const [count, setcount] = useState(0);
  if (!data) {
    return <></>;
  }
  return (
    <div className={`${Styles.TabList} ${isMobile && Styles.mobile}`} >
      {tabs.map((tab) =>
        <Tab
          onClick={() => {
            tabs.forEach((value) => value.isSelected = false)
            tab.isSelected = true
            Storage.set(data)
            setcount(count + 1)
          }}
          tab={tab}
        />
      )}
      <div>
        <button>+</button>
      </div>
    </div>
  )
};
export { TabList };
