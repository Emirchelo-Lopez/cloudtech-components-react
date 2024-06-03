function Checkpoint_FillOff({ textContent }) {
  return (
    <div className="checkpoint checkpoint-fillOff">
      <div className="checkpoint-index">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <circle
            cx="22.0003"
            cy="22.0001"
            r="17.3333"
            stroke="#6F767E"
            strokeWidth="2"
          />
        </svg>
        <p>{textContent}</p>
      </div>
      <span className="checkpoint-section">Section</span>
    </div>
  );
}

export default Checkpoint_FillOff;
