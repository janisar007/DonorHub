import React from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <BiSolidDonateBlood color="red" className="mx-3 text-xl-start" />
            DonorHub -- The Blood Bank App
          </div>
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <FaUser className="mx-1" />
                Welcome {user.name}
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
