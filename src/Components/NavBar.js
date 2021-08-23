import React from 'react'
import  logo  from "../Images/logo.JPG"
import  logoName  from "../Images/logoName.JPG"
import { Button, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";

const styles = makeStyles({
    bar:{
        paddingTop: "1.5rem",
        backgroundColor: "#757F9A",
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "3.5%",
        // eslint-disable-next-line 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoName:{
        width: "10.5%", 
        //display: "none", 
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
    logout:{
        display:"flex",
        alignContent:"center",
        justifyContent:"center",       
      }
})

function NavBar() {
    const classes= styles()
    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname ="/Landing";
      }
      let location = useLocation();
        console.log(location);
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
   
            <img src={logo} className={classes.logo} alt="Logo of the website"/> 
            <img src={logoName} className={classes.logoName} alt="Logo Name"/>
            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/">Home</Link>
            </Typography> 
            <Typography variant="h6" className={classes.menuItem}>
            <Link to="/About">About</Link>
            </Typography> 
            <Typography variant="h6" className={classes.menuItem}>
            <Link to="/Map">Map-IT</Link>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Demos 
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact Us 
            </Typography>
            <Button variant="contained" color="primary" className={`${classes.logout} ${classes.menuItem}`} onClick={handleLogout}>
                Hi, Logout
            </Button>

        </Toolbar>
        
    )
}

export default NavBar
