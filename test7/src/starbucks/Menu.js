import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu, onMenu }) => {
  // console.log(menu);
  return (
    <div className="menu">
      {menu.map((item) => {
        return <MenuItem key={item.name} item={item} onMenu={onMenu} />;
      })}
    </div>
  );
};

export default Menu;
