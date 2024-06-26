function RolePillDesktop_Default() {
  return (
    <button className="role-pill-desktop default btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="9" stroke="#6F767E" strokeWidth="2" />
      </svg>
      Option
    </button>
  );
}

function RolePillDesktop_Hover() {
  return (
    <div id="Role-Pill-Desktop" className="component-set">
      <button className="role-pill-desktop hover btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="9" stroke="#1A1D1F" strokeWidth="2" />
        </svg>
        Option
      </button>
      <button className="role-pill-desktop hover-darkMode btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="9" stroke="#FCFCFC" strokeWidth="2" />
        </svg>
        Option
      </button>
    </div>
  );
}

function RolePillDesktop_Hover_DarkMode() {
  return (
    <button className="role-pill-desktop hover-darkMode btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="9" stroke="#FCFCFC" strokeWidth="2" />
      </svg>
      Option
    </button>
  );
}

function RolePillDesktop_Active() {
  return (
    <button className="role-pill-desktop active-pill btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="9" stroke="#1A1D1F" strokeWidth="2" />
      </svg>
      Option
    </button>
  );
}

function RolePillDesktop_Active_DarkMode() {
  return (
    <button className="role-pill-desktop active-darkMode btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="9" stroke="#FCFCFC" strokeWidth="2" />
      </svg>
      Option
    </button>
  );
}

export default RolePillDesktop_Default;
export {
  RolePillDesktop_Hover,
  RolePillDesktop_Hover_DarkMode,
  RolePillDesktop_Active,
  RolePillDesktop_Active_DarkMode,
};
