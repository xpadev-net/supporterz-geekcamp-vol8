import { useContext } from "react";
import { tasksContext } from "@/contexts/tasks";
import Styles from "@/styles/components/Tab.module.scss";

type props = {
  tab: Tab;
};
const Tab = ({ tab }: props) => {
  const { isMobile } = useContext(tasksContext);

  return (
    <div
      className={`${Styles.Tab} ${isMobile && Styles.mobile} ${
        tab.isSelected && Styles.selected
      }`}
    >
      {tab.title}
    </div>
  );
};
export { Tab };
