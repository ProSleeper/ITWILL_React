import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu, onMenu }) => {

  return (
    <div className="menu">
      {menu.map((item) => {
        return <MenuItem key={item.name} name={item.name} onMenu={onMenu} />;
      })}
    </div>
  );
};

export default Menu;
