type TaskNoChild = {
  type: "taskNoChild";
  title: string;
  content: string;
  expired?: number;
  progress: number;
  isSelected: boolean;
};
type TaskChild = {
  type: "taskChild";
  title: string;
  content: string;
  expired?: number;
  childTask: Task[];
  isSelected: boolean;
};
type Task = TaskNoChild | TaskChild;
type Tab = {
  type: "tab";
  title: string;
  childTask: Task[] | Tab[];
  isSelected: boolean;
};
