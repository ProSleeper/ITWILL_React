/**
 * 커피 카테고리별로 클릭 시 해당 카테고리의 커피 리스트를 출력해주는 부분
 * 카테고리별로 출력하는 방법은 filter메서드를 통해서 해당하는 name의 카테고리를 가진 커피만 출력
 * 계속해서 반복되는 props의 흐름, 즉 데이터의 흐름을 공부하고 있는데.. 이제 슬슬 redux가 나온 이유를 이해하게 되고 있달까?
 * 이 정도 수준만으로도 데이터를 부모에서 관리하고 데이터의 흐름을 위에서 아래로만 흐른다.
 * 이 때문에 어느정도 복잡한데 실무에서는 얼마나 데이터 관리가 힘들고 복잡할지 상상도 안된다.
 * 
 * 
 */

import React from "react";
import "../assets/css/reset.css";
import "./style.css";
import Menu from "./Menu";
import CoffeeList from "./CoffeeList";
import { useState } from "react";
import data from "../assets/api/menu";

const Starbucks = () => {
  //이건 setMenu를 아예 안쓰기 때문에 state일 필요가 없다.
  //일반 객체로 만들어도 됨. 사실 이것도 상태라기보다는 데이터다.
  const [menu, setMenu] = useState([{ name: "all" }, { name: "coldbrew" }, { name: "espresso" }, { name: "frappuccino" }, { name: "fizzio" }, { name: "cake" }, { name: "bread" }]);

  const [coffee, setCoffee] = useState(data);

  /**
   * 메뉴를 보여줄때 all or one 형식으로 보여준다.
   * 이렇게 하면 다른 메뉴, 예를 들어서 cake나 bread가 추가 된다고 하더라도
   * 쉽게 추가하고 다른 코드적인 부분을 바꿀필요가 전혀 없다.
   */
  const onMenu = newFunction(setCoffee);

  return (
    <div className="wrap">
      <h1>Starbucks Menu</h1>
      <Menu menu={menu} onMenu={onMenu} />
      <CoffeeList coffee={coffee} />
    </div>
  );
};

export default Starbucks;

function newFunction(setCoffee) {
  return (name) => {
    if (name === 'all') {
      setCoffee(data);
    }
    else {
      setCoffee(data.filter((coffee) => coffee.name === name));
    }
  };
}
