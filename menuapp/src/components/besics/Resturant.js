import React, { useState } from 'react'
import './Style.css'
import Menu from './menuAPI'
import MenuCard from './MenuCard'
import NavBar from './navBar';

const uniqueList = [...new Set(Menu.map((currElm) => {
  return currElm.category;
})), 'All'];

const Resturant = () => {
    const[menuData, setMenuData] = useState(Menu);
    const[menuList, setMenuList] = useState(uniqueList);
    // console.log(uniqueList);
    const filterItem = (category) => {
      if( category==='All' ) {
        setMenuData(Menu);
        return;
      } 
      const updatedList = Menu.filter((currElm) => {
          return currElm.category === category;
        });
        setMenuData(updatedList);
    }
    console.log(menuData);
    return (
    <>
       <NavBar filterItem={filterItem} menuList={menuList}/>
       <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant