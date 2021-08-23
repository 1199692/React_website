import React, {Component} from "react";
import { Box, Button, GridListTileBar, Typography } from "@material-ui/core";
import './styles.css'

export default class Preview2 extends React.Component {
  state = {
   seen: false
   };
  togglePop = () => {
   this.setState({
    seen: !this.state.seen                                     
   });
  };
render() {
  return (
   <div>
    <div className="btn" onClick={this.togglePop}>
      <Button variant="outlined">Preview</Button>
    </div>
    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
   </div>
  );                
 }
}
class PopUp extends Component {
    handleClick = () => {
     this.props.toggle();
    };
  render() {
    return (
     <div className="modal">
       <div className="modal_content">
       <span className="close" onClick={this.handleClick}>&times;    </span>
       <p>I'm A Pop Up!!!</p>
      </div>
     </div>
    );
   }
  }