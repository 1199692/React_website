import '../App.css';
import {  makeStyles} from '@material-ui/core/styles'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import About from '../Components/About';
import Map from '../Components/Map';
import Footer from '../Components/Footer';
import PDF from '../Components/PDF';
import NotFound from '../Components/NotFound';


const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto" ,
    textAlign: "center",
  },
 
  bigSpace: {
    marginTop:  "5rem"
  },
  littleSpace:  {
    marginTop:  "2.5rem"
  },
  title: {
    color: "#314976",
    font: "Italic"
  }
})


function App() {
  const classes = styles();

  return (
    <Router>
      <div className="App">
        <NavBar/>

        <div className={classes.wrapper}>
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Map" component={Map} />
            <Route exact path="/PDF" component={PDF} />
                     
          </switch>
        </div>
      
        <div  className={classes.bigSpace}>
          <Footer/>
        </div>

      </div>
    </Router>

          

  );  
}

export default App;
