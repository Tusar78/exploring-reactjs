import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nav__logo">Rest Countries</h1>

        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#countries" className="nav__link">
              Countries
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
