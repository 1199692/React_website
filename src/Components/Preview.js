import React, {Component} from "react";
import { Box, Button, colors, GridListTileBar, Modal, Typography } from "@material-ui/core";
import './styles.css';
import  ReactModal from 'react-modal';
import home1 from '../Images/home1.png';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles} from '@material-ui/core/styles'

const style = makeStyles({
  popup:{
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    display:"flex",
  },
  btn1:{

  }

})
export default class Preview extends React.Component {
  
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
     
    render () {
 
      return (
        <div>
          <Button className="btn" variant="contained" onClick={this.handleOpenModal}>Trigger Modal</Button>
          <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.handleCloseModal}
            ShouldCloseOnOverlayClick={true}
            style={{
              overlay:{
                color:"aqua",
                outerHeight:"50px",
                borderWidth:"100px"
              },
              content:{
                color:"darkgreen"
              }
            }

            }
          >
            <Box display="flex" alignItems="flex-end"> <CloseIcon  onClick={this.handleCloseModal} /> </Box>
            <Box ml={20} mt={5} >
              <img src={home1} alt="body1"  />
            </Box> 
          </ReactModal>
        </div>
      );
    }
}

