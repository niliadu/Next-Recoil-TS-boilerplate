import { atom, useRecoilState } from "recoil";
import { Recoil } from "./Keys";

export const countState = atom({
  key: Recoil.KEY.COUNT.STATE,
  default: 0,
});

export const useCount = () => {
  const [count, setCount] = useRecoilState(countState);
  return {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };
};
