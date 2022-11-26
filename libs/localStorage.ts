const STORAGE_PREFIX = "TaskShelf";
/**
 * LocalStorage読み書き用ラッパー
 */
const Storage = {
  get: (): Tab[] => {
    return JSON.parse(
      localStorage.getItem(`${STORAGE_PREFIX}_Tasks`) || "[]"
    ) as Tab[];
  },
  set: (data: Tab[]): void => {
    localStorage.setItem(`${STORAGE_PREFIX}_Tasks`, JSON.stringify(data));
  },
};
export { Storage };
