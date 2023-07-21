import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="grid place-content-center">
      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-3 border-2 border-lime-600"
        >
          increment
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
