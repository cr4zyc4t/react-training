import React from "react";
import "./Sidebar.scss";

const Sidebar = (props) => (
  <div className="SidebarWrapper">
    <div className="sidebar-item-container">
      {new Array(10).fill(0).map((v, i) => {
        return (
          <div key={i} className={`sidebar-item ${i === 5 && "active"}`}>Item aaaaaaaaaa aaaaaaaaa{i}</div>
        )
      })}
    </div>
  </div>
);

export default Sidebar;
