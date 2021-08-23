import React from 'react'
import  logo  from "../Images/logo.JPG"
import  logoName  from "../Images/logoName.JPG"
import { Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
    }
})

function NavBar() {
    const classes= styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
   
            <img src={logo} className={classes.logo} alt="Logo of the website"/> 
            <img src={logoName} className={classes.logoName} alt="Logo Name"/>
            <Typography variant="h6" className={classes.menuItem}>
            <Link to="/About">About</Link>
            </Typography> 
            <Typography variant="h6" className={classes.menuItem}>
                Contact Us 
            </Typography>

        </Toolbar>
        
    )
}

export default NavBar
