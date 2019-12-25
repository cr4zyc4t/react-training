import React from "react";
import './TaskManager.scss';
import Header from "../../components/task-manager/Header";
import Sidebar from "../../components/task-manager/Sidebar";
import Detail from "../../components/task-manager/Detail";

const TaskManager = () => (
  <div className="TaskManagerWrapper">
    <div className="task-wrapper">
      <div className="header-container">
        <Header />
      </div>
      <div className="task-content-container">
        <div className="task-list">
          <Sidebar />
        </div>
        <div className="task-detail">
          <Detail />
        </div>
      </div>
    </div>
  </div>
);

export default TaskManager;
