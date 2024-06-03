import { useState } from "react";

function DropdownMenu() {
  // Initialize state with a default selected option
  const [selectedOption, setSelectedOption] = useState("Selecciona tu opción");

  // Function to toggle the dropdown menu visibility
  const toggleDropdown = () => {
    // Assuming you have a way to show/hide the dropdown similar to your vanilla JS logic
    // Here we're just toggling a class "active" for demonstration purposes
    // You might need to adjust this part based on your actual implementation
    const dropdown = document.querySelector(".select-menu");
    dropdown.classList.toggle("active");
  };

  // Function to handle option selection
  const selectOption = (optionText) => {
    setSelectedOption(optionText); // Update the state with the selected option text
    // Hide the dropdown after selecting an option
    const dropdown = document.querySelector(".select-menu");
    dropdown.classList.remove("active");
  };

  return (
    <div className="select-menu">
      <div className="select-menu-title">
        <span className="select-menu-title-text">Categoría</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016ZM8.00016 7.3335C8.36835 7.3335 8.66683 7.63197 8.66683 8.00016V11.3341C8.66683 11.7023 8.36835 12.0008 8.00016 12.0008C7.63197 12.0008 7.3335 11.7023 7.3335 11.3341V8.00016C7.3335 7.63197 7.63197 7.3335 8.00016 7.3335ZM8.00016 6.00016C8.36835 6.00016 8.66683 5.70169 8.66683 5.3335C8.66683 4.96531 8.36835 4.66683 8.00016 4.66683C7.63197 4.66683 7.3335 4.96531 7.3335 5.3335C7.3335 5.70169 7.63197 6.00016 8.00016 6.00016Z"
            fill="#9A9FA5"
          />
        </svg>
      </div>
      <div className="select-btn" onClick={toggleDropdown}>
        <span className="sBtn-text">{selectedOption}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#6F767E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul className="options">
        <li className="option" onClick={() => selectOption("Opción 1")}>
          <span className="option-text">Opción 1</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 2")}>
          <span className="option-text">Opción 2</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 3")}>
          <span className="option-text">Opción 3</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 4")}>
          <span className="option-text">Opción 4</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 5")}>
          <span className="option-text">Opción 5</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 6")}>
          <span className="option-text">Opción 6</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 7")}>
          <span className="option-text">Opción 7</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 8")}>
          <span className="option-text">Opción 8</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 9")}>
          <span className="option-text">Opción 9</span>
        </li>
        <li className="option" onClick={() => selectOption("Opción 10")}>
          <span className="option-text">Opción 10</span>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
