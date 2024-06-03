function RolePillMobile() {
  return (
    <div id="Role-Pill-Mobile" className="component-set-2x1">
      <button className="role-pill-mobile btn">
        <div className="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" fill="#1A1D1F" />
          </svg>
          Menu Item
        </div>
      </button>
      <button className="role-pill-mobile role-pill-mobile_darkMode btn">
        <div className="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" fill="#FCFCFC" />
          </svg>
          Menu Item
        </div>
      </button>
    </div>
  );
}

export default RolePillMobile;
