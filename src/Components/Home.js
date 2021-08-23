import React, { useState } from 'react'
import { Box, Button, GridListTileBar, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles'
import  Grid1  from "./Grid1";
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';


//changes to imports 
//import SecurityIcon from '@material-ui/icons/Security';
import CropFreeIcon from '@material-ui/icons/CropFree';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReactPlayer from 'react-player';
import home1 from '../Images/home1.png';
import Preview from './Preview.js'

const styles = makeStyles((theme)=> ({
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
  image:{
    textAlign: 'center',
    width:"300px",
    height:"150px"
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor:"pink"
  },
  
}));

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
  const [showImage, setShowImage] =  useState(false)

//For popover
const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div >
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper} >
          <Typography variant="h4" className= "App-Section"  >
            What is this section about?
          </Typography>
          <div style={{ display: "flex",flexDirection: "row", justifyContent: "flex-start" }}>
            <Typography variant="body1" >
              Tøyen Unlimited is neighborhood incubator that supports local residents with innovative solutions to social challenges.
              <Typography style={{ display: "flex",flexDirection: "row", justifyContent: "flex-start" }}>We support them to&nbsp;
                <Typography style={{textDecoration:"underline"}}
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose} 
                >
                  TESTING 
                </Typography>
                <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper,
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography>I use Popover.</Typography>
                </Popover>
              &nbsp;establish social enterprises with a focus on financial sustainability and non-profit purposes.
              </Typography>           
            </Typography>
            
          </div>
        </div>

        <div className={classes.video}>
                   
          <ReactPlayer  url="https://www.youtube.com/watch?v=QUvR3irKZaE" width="80%" height="360px" playsinline="true" controls="true"/>

        </div >
        <div className={`${classes.wrapper} ${classes.grid} ${classes.bigSpace} ${classes.title}`}>
          <Grid1 icon={<CropFreeIcon style={{fill: "#4360A6", height:"50", width:"50"}}/>}  title="Frame IT" btnTitle="Show me More" />
          <Grid1 icon={<EventNoteIcon style={{fill: "#449A76", height:"50", width:"50"}}/>} title="MAP IT" btnTitle="Show me More"/>
          <Grid1 icon={<ImportExportIcon style={{fill: "#5EA780", height:"50", width:"50"}}/>}  title="Track IT" btnTitle="Show me More"/>
          <Grid1 icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"50", width:"50"}}/>}  title="Tell IT" btnTitle="Show me More"/>
        </div>
        <div className={classes.wrapper}>
          <Grid container  >
            <Box flexDirection="column" pr={2} >
              <Grid item title="preview">  
                <img src={home1} alt="body1" className={classes.image} />
              </Grid>
              <Button variant="outlined" style={{textTransform:"none", color:"HighlightText"}} 
                onClick={showImage}
              > 
                Preview 
              </Button> 
            </Box>
            <Box flexDirection="column" pr={2}  >
              <Grid item title="preview">  
                <img src={home1} alt="body1" className={classes.image} />
              </Grid>
              <Preview/>
            </Box>
            <Box flexDirection="column" pr={2} >
              <Grid item  title="preview">  
                <img src={home1} alt="body1" className={classes.image} />
              </Grid>
              <Typography> Preview </Typography>
            </Box>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );  
}

export default Home;
