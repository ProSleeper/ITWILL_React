import React from "react";
import CoffeeList from "./CoffeeList";

const MenuItem = ({ item, onMenu }) => {
  const { name } = item;

  const ch = name.charAt(0).toUpperCase();
  const str = name.slice(1);
  const txt = ch + str;

  return (
    <button onClick={()=>onMenu(name)}>
      {/* 3가지 모두 가능하다. */}
      {/* {name}/{ch}/{str} */}
      {/* {txt} */}
      {`${ch}${str}`}
    </button>
  );
};

export default MenuItem;
