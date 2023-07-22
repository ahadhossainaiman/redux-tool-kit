import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="grid place-content-center">
      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-3 border-2 border-lime-600"
        >
          increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-5 py-3 border-2 border-lime-600"
        >
          incrementByFive
        </button>
        <div className="p-5">{count}</div>
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-3 border-2 border-red-900"
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
