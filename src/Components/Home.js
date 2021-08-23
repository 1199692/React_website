import React from 'react'
import { Button, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles'
import  Grid  from "./Grid";

//changes to imports 
//import SecurityIcon from '@material-ui/icons/Security';
import CropFreeIcon from '@material-ui/icons/CropFree';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReactPlayer from 'react-player';

const styles = makeStyles({
  wrapper: {
    width: "100%",
    margin: "auto" ,
    textAlign: "center",
    marginTop:"50px"
  },
  video:{
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:"5rem",
    marginTop:"2.5rem"

  },
  bigSpace: {
    marginTop:  "5rem"
  },
  littleSpace:  {
    marginTop:  "2.5rem"
  },
  grid: {
        display:  "flex",
        margin: "auto" ,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
  },
  title: {
    color: "#314976",
    font: "Italic"
  },
  
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#FCEA8B",
    },
    secondary: {
      main:"#365183",
    },
  },
  typography: {
    h4: {
      
      fontSize: 24,
      lineHeight: '2rem',
      color:' #24243F'
      },
    body1: {
      
      fontSize: 16,
      lineHeight: '2rem',
    },
  },
});

function Home() {
  const classes = styles();
  

  return (
    <div >
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper} >
          <Typography variant="h4" className= "App-Section"  >
            What is this section about?
          </Typography>
          <Typography variant="body1" className={classes.littleSpace} color="secondary">
            Tøyen Unlimited is a neighborhood incubator that supports local residents with innovative solutions to social challenges. We support them to establish social enterprises with a focus on financial sustainability and non-profit purposes.          
          </Typography>
        </div>

        <div className={`${classes.video}`}>
                   
          <ReactPlayer  url="https://www.youtube.com/watch?v=QUvR3irKZaE" width="80%" height="360px" playsinline="true" controls="true"/>

        </div >
        <div className={`${classes.wrapper} ${classes.grid} ${classes.bigSpace} ${classes.title}`}>
          <Grid icon={<CropFreeIcon style={{fill: "#4360A6", height:"50", width:"50"}}/>}  title="Frame IT" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"50", width:"50"}}/>} title="MAP IT" btnTitle="Show me More"/>
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"50", width:"50"}}/>}  title="Track IT" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"50", width:"50"}}/>}  title="Tell IT" btnTitle="Show me More"/>
        </div>
      </ThemeProvider>
    </div>
  );  
}

export default Home;
