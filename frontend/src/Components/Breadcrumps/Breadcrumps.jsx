// Breadcrumps.js
import React from "react";
import { Link } from "react-router-dom";
import "./Bread.css";

const Breadcrumps = ({ path }) => {
  return (
    <div className="bread">
      {path.map((item, index) => {
        const isLastItem = index === path.length - 1;
        return (
          <div key={item.name} className="breaditem">
            <Link to={item.link} className="link">
              {item.name}{" "}
            </Link>
            {!isLastItem && <span className="separator">{" >> "}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumps;
