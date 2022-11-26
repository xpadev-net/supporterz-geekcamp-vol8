type TaskNoChild = {
  type: "task";
  title: string;
  content: string;
  expired?: number;
  progress: number;
};
type TaskChild = {
  type: "task";
  title: string;
  content: string;
  expired?: number;
  childTask: Task[];
};
type Task = TaskNoChild | TaskChild;
type Tab = {
  type: "tab";
  title: string;
  childTask: Task[] | Tab[];
};
