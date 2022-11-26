const STORAGE_PREFIX = "TaskShelf";
const mock = `[{"type":"tab","title":"tab1","childTask":[{"type":"taskNoChild","title":"hoge","content":"huga","progress":"0","isSelected":false}],"isSelected":true},{"type":"tab","title":"tab2","childTask":[{"type":"tab","title":"tab4","isSelected":false,"childTask":[]},{"type":"tab","title":"tab5","isSelected":false,"childTask":[]},{"type":"tab","title":"tab6","isSelected":false,"childTask":[]}],"isSelected":false},{"type":"tab","title":"tab3","isSelected":false,"childTask":[]}]`;
/**
 * LocalStorage読み書き用ラッパー
 */
const Storage = {
  get: (): Tab[] => {
    return JSON.parse(
      localStorage.getItem(`${STORAGE_PREFIX}_Tasks`) || mock
    ) as Tab[];
  },
  set: (data: Tab[]): void => {
    localStorage.setItem(`${STORAGE_PREFIX}_Tasks`, JSON.stringify(data));
  },
};
export { Storage };
