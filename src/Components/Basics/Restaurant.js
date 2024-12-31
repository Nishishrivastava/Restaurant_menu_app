import React, { useState } from "react";
import "./style.css";
import Menucard from "../Menucard.js";
import Menu from "./Menu.js";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }; 
    return(
        <>
        <h1 align='center'>Alba Bistro Cafe Menu</h1>
        <nav className="navbar">
          <div className="btn-group">
            <button className="btn-group__item" onClick={()=>filterItem('Coffee')}>Coffee</button>
            <button className="btn-group__item" onClick={()=>filterItem('Sandwiches')}>Sandwiches</button>
            <button className="btn-group__item" onClick={()=>filterItem('Pasta')}>Pasta</button>
            <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
          </div>
        </nav>
        <Menucard menuData={menuData} />
          
        </>
    )
}
export default Restaurant;