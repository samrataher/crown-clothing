import React from "react";
import "./menuItems.styles.scss";

const MenuItem = ({ section }) => {
  return (
    <div className={`${section.size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${section.imageUrl})` }}
      />
      <div className="content">
        <h1 className="title"> {section.title.toUpperCase()} </h1>
        <span className="sub-title"> Shop Now </span>
      </div>
    </div>
  );
};

export default MenuItem;
