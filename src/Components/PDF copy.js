import React from 'react';
import Pdf from 'react-to-pdf';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {  useHistory, Link } from 'react-router-dom';
import Map from './Map'

//import { makeStyles } from '@material-ui/core/styles';
//import { Link } from "react-router-dom";

const ref = React.createRef();

/*const options = {
    orientation: 'portrait',
    format: "A4",
};
*/

const PDF = (props) => {

   
    
    return(
        <>
            <div className="Post" ref={ref}   >
                
                <h1>Tøyen Unlimited </h1> 
                <Box textAlign="justify" m={3} >

                     Name : {props.fname} {props.lname}
                     <p>Email :  {props.email}</p> 
                     <p>Phone : {props.phone}</p>
                      
                </Box>     
               { /* <img src = {props.image} alt="Tøyen" /> */}
                     
            </div>              
            <Pdf targetRef={ref} filename="Map.pdf"  >                               
                {({toPdf}) => <Button onClick ={toPdf} color="secondary" variant="contained"> Capture as PDF</Button> }
            </Pdf>
            <Box marginLeft="10px">
            <Button component={Link} to="/Map" variant="contained" color="primary">
                Back
            </Button>
            </Box>            
        </>
    );
}
export default PDF;