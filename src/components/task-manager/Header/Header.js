import React from "react";
// import PropTypes from "prop-types";
import cls from './Header.module.scss'

const Header = () => (
  <div className={cls["HeaderWrapper"]}>
    <span className={cls["title"]}>Task Manager</span>
    <span className={cls["spacer"]}></span>
    <input className={cls["form-control"]} />
  </div>
);

// Header.propTypes = {
//   // bla: PropTypes.string,
// };

export default Header;
