import React from "react";
import logo from "../../assets/imgs/Logo.jpg";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2">
        <div className="container">
          <a className="navbar-brand " href="#">
            <img src={logo} alt="" className="w-100 rounded-5" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-house"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-clipboard-user"></i> Attendance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-square-parking"></i> Parking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-user"></i> SigIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
