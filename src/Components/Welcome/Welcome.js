import React from "react";
import classes from "./Welcome.module.css";
import { useSelector } from "react-redux";
//import bmsLogo from "../../assets/images/bmsLogo.jpg";

const Welcome = (props) => {
  let name = useSelector((state) => {
    if (!state.auth.userData) {
      return "user";
    }
    return state.auth.userData.name;
  });

  let isAdmin = useSelector((state) => {
    return state.auth.isAdmin;
  });

  let usn = useSelector((state) => {
    if (!state.auth.userData) {
      return "user";
    }
    return state.auth.userData.usn;
  });

  let dept = useSelector((state) => {
    if (!state.auth.userData) {
      return "user";
    }
    return state.auth.userData.branch;
  });

  if (isAdmin) {
    return (
      <div className={classes.center}>
        <p className={classes.Welcome}>WELCOME TO BMSCE CAMPUS PORTAL</p>
        <hr></hr>
        <p style={{ padding: "20px" }}></p>
        <p className={classes.info}>Name : {name}</p>
      </div>
    );
  } else {
    return (
      <div className={classes.center}>
        <p className={classes.Welcome}>WELCOME TO BMSCE CAMPUS PORTAL</p>
        <hr></hr>
        <p style={{ padding: "20px" }}></p>
        <p className={classes.info}>Name : {name}</p>
        <p className={classes.info}>USN : {usn}</p>
        <p className={classes.info}>Department : {dept}</p>
      </div>
    );
  }
};

export default Welcome;
