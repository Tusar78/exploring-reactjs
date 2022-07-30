import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/home" className="nav__logo">
          <img src='images/Logo.svg' alt="Website logo" className="nav__logo-img" />
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/order" className="nav__link">
                Order
              </a>
            </li>
            <li className="nav__item">
              <a href="/order-review" className="nav__link">
                Order Review
              </a>
            </li>
            <li className="nav__item">
              <a href="/manage-inventory" className="nav__link">
                Manage Inventory
              </a>
            </li>
            <li className="nav__item">
              <a href="/login" className="nav__link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
