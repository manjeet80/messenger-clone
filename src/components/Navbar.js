import React from "react";
import { ContextProvider } from "../context/ContextProvider";

const Navbar = () => {
  const { register, user, loader, logout } = React.useContext(ContextProvider);

  const userRegister = () => {
    register();
  };

  const userLogout = () => {
    logout();
  };
  const checkhUser = () => {
    return !loader ? (
      user ? (
        <div className="navbar_links">
          {" "}
          <li>
            <span className="navbar_img">
              <img src={user.photoURL} alt="user-img" />
            </span>
          </li>
          <li>
            <button className="navbar_btn" onClick={userLogout}>
              Logout
            </button>
          </li>{" "}
        </div>
      ) : (
        <div className="navbar_links">
          <li>
            {" "}
            <button className="navbar_btn" onClick={userRegister}>
              {" "}
              Register with Google
            </button>
          </li>
        </div>
      )
    ) : (
      "..."
    );
  };
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_logo">Messenger</div>
        {checkhUser()}
      </div>
    </div>
  );
};

export default Navbar;
