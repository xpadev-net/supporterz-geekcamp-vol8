type props = {
  tab: Tab;
};
const Tab = ({ tab }: props) => {
  return <div>{tab.title}</div>;
};
export { Tab };
