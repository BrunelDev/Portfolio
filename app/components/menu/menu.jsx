"use client";
import "../portfolioStyle/portfolio.css";
import React, { useState } from "react";
import { Sidebar } from "../sidebar/sidebar.jsx";

export function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  function actionMenu() {
    setShowMenu(!showMenu);
  }
  const menuClass = !showMenu ? "menu-box" : "menu-animated";
  return (
    <div>
      <div
        onClick={() => {
          actionMenu();
        }}
        className={menuClass}
      >
        <div className="menu-top"></div>
        <div className="menu-middle"></div>
        <div className="menu-bottom"></div>
      </div>
      <div className="z-0">{showMenu && <Sidebar />}</div>
    </div>
  );
}
