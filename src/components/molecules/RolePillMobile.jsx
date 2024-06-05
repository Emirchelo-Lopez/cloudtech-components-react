function RolePillMobile() {
  return (
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
  );
}

function RolePillMobile_DarkMode() {
  return (
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
  );
}

export default RolePillMobile;
export { RolePillMobile_DarkMode };
