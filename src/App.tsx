// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  subtracted,
  amountAdded,
} from "./features/counter/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(incremented());
  const handleSubtraction = () => dispatch(subtracted());
  const handleAddAmount = () => dispatch(amountAdded(5));
  return (
    <div className="App">
      <button onClick={handleClick}>increment</button>
      <button onClick={handleSubtraction}>subtract</button>
      <button onClick={handleAddAmount}>add5</button>

      <h2>{count}</h2>
    </div>
  );
}

export default App;
