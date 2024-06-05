function DraggableField() {
  return (
    <div className="input-group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z"
          fill="#6F767E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z"
          fill="#6F767E"
        />
      </svg>
      <textarea
        name="textarea"
        id="textarea"
        placeholder="Pulsa Enter para agregar"
        rows="2"
      ></textarea>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 10C10.5523 10 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11C9 10.4477 9.44772 10 10 10Z"
          fill="#FF6A55"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 10C14.5523 10 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11C13 10.4477 13.4477 10 14 10Z"
          fill="#FF6A55"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2C8.34315 2 7 3.34315 7 5H4H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H4V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H20H17C17 3.34315 15.6569 2 14 2H10ZM15 5C15 4.44772 14.5523 4 14 4H10C9.44772 4 9 4.44772 9 5H15ZM7 7H6V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7H17H7Z"
          fill="#FF6A55"
        />
      </svg>
    </div>
  );
}

export default DraggableField;
