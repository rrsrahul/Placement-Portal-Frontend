import React from "react";
import classes from "./Welcome.module.css";
import { useSelector } from "react-redux";
import bmsLogo from "../../assets/images/bmsLogo.jpg";

const Welcome = (props) => {
  let name = useSelector((state) => {
    if (!state.auth.userData) {
      return "user";
    };
    return state.auth.userData.name;
  });

  return (
    <div className={classes.center}>
      <p className={classes.Welcome}>WELCOME TO BMSCE CAMPUS PORTAL</p>
      <hr></hr>
      <p style={{padding:'20px'}}></p>
      <p className={classes.info}>Name : {name}</p>
      <p className={classes.info}>USN : 1bm17is089</p>
      <p className={classes.info}>Department : ISE</p>
    </div>
  );
};

export default Welcome;
