import React, { useState, useEffect } from "react";
import cls from './ErrorPage.module.scss';
import { Link, Redirect } from "react-router-dom";

const ErrorPage = () => {
  const [time, setTime] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time => time - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    };
  }, [])

  if (time === 0) {
    return <Redirect to="/" />
  }

  return (
    <div className={cls['ErrorPageWrapper']}>
      <label>Error 404 - Page Not Found</label>
      <p className={cls["message"]}>You will be redirect to <Link to="/">HomePage</Link> in {time} seconds</p>
    </div>
  )
};

export default ErrorPage;
