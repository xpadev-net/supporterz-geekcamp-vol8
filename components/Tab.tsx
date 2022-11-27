import { MouseEventHandler, useContext } from "react";
import { tasksContext } from "@/contexts/tasks";
import Styles from "@/styles/components/Tab.module.scss";

type props = {
  tab: Tab;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
const Tab = ({ tab, onClick }: props) => {
  const { isMobile } = useContext(tasksContext);

  return (
    <div
      className={`${Styles.Tab} ${isMobile && Styles.mobile} ${
        tab.isSelected && Styles.selected
      }`}
      onClick={onClick}
    >
      {tab.title}
    </div>
  );
};
export { Tab };
