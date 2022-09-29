/**
 * 
 * 
 */

import React from 'react';
import "../assets/css/reset.css"
import './style.css'
import Menu from './Menu';
import CoffeeList from './CoffeeList';
import { useState } from 'react';
import data from '../assets/api/menu'

const Starbucks = () => {

  //이건 setMenu를 아예 안쓰기 때문에 state일 필요가 없다.
  //일반 객체로 만들어도 됨. 사실 이것도 상태라기보다는 데이터다.
  const [menu, setMenu] = useState([
    {name:'all'},
    {name:'coldbrew'},
    {name:'espresso'},
    {name:'frappuccino'},
    {name:'fizzio'},
    {name:'cake'},
    {name:'bread'},
  ]);

  const [coffee, setCoffee] = useState(data);


  /**
   * 메뉴를 보여줄때 all or one 형식으로 보여준다.
   * 이렇게 하면 다른 메뉴, 예를 들어서 cake나 bread가 추가 된다고 하더라도
   * 쉽게 추가하고 다른 코드적인 부분을 바꿀필요가 전혀 없다.
   */
  const onMenu = (name) => {
    if (name === 'all') {
      setCoffee(data);
    }
    else {
      setCoffee(data.filter((coffee) => {
        return coffee.name == name;
      }))
    }
  }

  return (
    <div className='wrap'>
      <h1>Starbucks Menu</h1>
      <Menu menu={menu} onMenu={onMenu} />
      <CoffeeList coffee={coffee} />
    </div>
  )
}

export default Starbucks