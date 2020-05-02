import React, { Children } from "react";
import Game from "./pages/game";
import "../components/navBar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item col-lg-6">
          <span className="navbar-brand mb-0 mr-5 h1"><i class="fab fa-critical-role mr-3"></i>Critical Clicker</span>
        </li>
        <li className="nav-item col-lg-6">
          <span className="navbar-brand mb-0 h1" id="clickToBegin"><i class="fab fa-critical-role mr-3"></i>
            Click an image to begin playing.
          </span>
        </li>
        <li className="nav-item" id="score">
          <span className="navbar-brand mb-0 h1"><i class="fab fa-critical-role mr-3"></i>Score: {Game.state.score} | Top Score: </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
