import { useState } from "react";

function Counter() {
  // Initialize state with a starting value (e.g., 1)
  const [count, setCount] = useState(1);

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div id="counter">
      <p className="number">{count}</p>
      <div className="steppers">
        <button className="btn" onClick={incrementCount}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="plus-button"
          >
            <path
              d="M15 12.5L10 7.5L5 12.5"
              stroke="#6F767E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="btn" onClick={decrementCount}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="minus-button"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#6F767E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Counter;
