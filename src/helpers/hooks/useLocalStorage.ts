import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue: number, key: string) => {
  const getValue = () => {
    if (typeof localStorage === "undefined") {
      return initialValue;
    }
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
