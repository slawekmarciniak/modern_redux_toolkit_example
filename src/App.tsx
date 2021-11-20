// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  subtracted,
  amountAdded,
} from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogsSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(incremented());
  const handleSubtraction = () => dispatch(subtracted());
  const handleAddAmount = () => dispatch(amountAdded(5));
  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  return (
    <div className="App">
      <button onClick={handleClick}>increment</button>
      <button onClick={handleSubtraction}>subtract</button>
      <button onClick={handleAddAmount}>add5</button>

      <h2>{count}</h2>

      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <table></table>
    </div>
  );
}

export default App;
