import React, { Component } from 'react'
import Pdf from 'react-to-pdf';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { BrowserRouter, useHistory } from 'react-router-dom';
//import { makeStyles } from '@material-ui/core/styles';
//import { Link } from "react-router-dom";

const ref = React.createRef();

/*const options = {
    orientation: 'portrait',
    format: "A4",
};
*/


class pdf1 extends Component {
    constructor(props) {
        super(props)
        
        this.handleBack=this.handleBack.bind(this)
    }
    handleBack(){
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <div className="Post" ref={ref}   >
                
                    <h1>Tøyen Unlimited </h1> 
                    <Box textAlign="justify" m={3} >

                        First Name : {this.fname}
                        <p>Last Name : {this.lname}</p> 
                        <p>Email :  {this.email}</p> 
                        <p>Phone : {this.phone}</p>
                        
                    </Box>     
                { /* <img src = {props.image} alt="Tøyen" /> */}
                     
                </div>              
                <Pdf targetRef={ref} filename="Map.pdf"  >                               
                    {({toPdf}) => <Button onClick ={toPdf} color="secondary" variant="contained"> Capture as PDF</Button> }
                </Pdf> 
                
                
            </div>
        )
    }
}

export default pdf1;
