import React from "react";
import { Link } from "react-router-dom";
import { Menuitem } from "./Menuitem";
import "./Navbar.css";

// Import Link component

class Navbar extends React.Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="Navbaritems">
        <h1 className="navbar-logo">KisanRaj</h1>
        <div className="menu-icons" onClick={this.handleclick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul
          className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}
        >
          {Menuitem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cname} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button className="button">SignUp</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar; // Export the component
