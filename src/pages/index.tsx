import { useCount } from "../Recoil/Counter";

export default function Index() {
  const counter = useCount();

  return (
    <>
      <>Count:{counter.count}</>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
    </>
  );
}
