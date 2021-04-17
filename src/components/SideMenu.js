import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//   makeStyles

const useStyles = makeStyles({
  SideMenu: {
    display: "flex",
    flexdirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  return <div className={classes.SideMenu}></div>;
};

export default SideMenu;
