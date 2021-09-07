import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByNumber,
  decrementByNumber,
} from "../store/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByNumber = (payload) => {
    dispatch(incrementByNumber(payload));
  };

  const handleDecrementByNumber = (payload) => {
    dispatch(decrementByNumber(payload));
  };

  return (
    <div>
      <p>Counter {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncrementByNumber(10)}>
        Increment By ${10}
      </button>
      <button onClick={() => handleDecrementByNumber(10)}>
        Decrement By ${10}
      </button>
    </div>
  );
};

export default Counter;
