"use client";
import "../portfolioStyle/portfolio.css";
import React, { useState } from "react";
import { Sidebar } from "../sidebar/sidebar.jsx";

export function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  function actionMenu() {
    setShowMenu(!showMenu);
  }
  const menuClass = !showMenu ? "menu-box" : "menu-box menu-animated";
  return (
    <div
      onClick={() => {
        actionMenu();
      }}
      className={menuClass}
    >
      <div className="menu-top"></div>
      <div className="menu-middle"></div>
      <div className="menu-bottom"></div>
      {showMenu && <Sidebar />}
    </div>
  );
}
