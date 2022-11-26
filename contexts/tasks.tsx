import { createContext, ReactNode } from "react";

type tasksContext = {
  data?: Tab[];
  setData?: (val: Tab[]) => void;
};

type contextProps = {
  children: ReactNode;
  value: tasksContext;
};

export const tasksContext = createContext<tasksContext>({});

/**
 * タスク用コンテクスト
 * @param props
 * @constructor
 */
const TasksContext = (props: contextProps): JSX.Element => {
  return (
    <tasksContext.Provider value={props.value}>
      {props.children}
    </tasksContext.Provider>
  );
};

export { TasksContext };
