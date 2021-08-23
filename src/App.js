import './App.css';
import {  makeStyles} from '@material-ui/core/styles'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import ProtectedRoute from './Components/ProtectedRoute';
import Main from './Components/Main'
import NotFound from './Components/NotFound';
import About from './Components/About';

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
          <Switch>
            <Route exact path="/Landing" component={Landing} />
            <ProtectedRoute exact path="/" component={Main}/>
            <Route exact path="*" component={NotFound} />
            <Route exact path="/About" component={About}/>
          </Switch>
        </div>
    </Router>

          

  );  
}

export default App;
