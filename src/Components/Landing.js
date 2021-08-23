import React , { Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LandingNavBar from '../Components/LandingNavBar'
import About from './About';

const useStyles = (theme) => ({
  paper: {
    marginTop: "theme.spacing(8)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 'spacing(1)',
    backgroundColor: 'palette.secondary.main',
    alignItems:'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 'spacing(3)',
  },
  submit: {
    margin: 'spacing(3, 0, 2)'
  },
});




class Map extends Component {
   
    userData;

    constructor (props)  {
        super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            fname: '',
            lname:'',
            email: '',
            purpose: '',
            postSubmitted:false
        }
        
    }
    
    // Form event
    onChangefirstName(e) {
        this.setState({ fname: e.target.value})
    }

    onChangelastName(e){
        this.setState({lname: e.target.value})
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onChangePhone(e){
        this.setState({purpose: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

    }

    //React Lifecycle

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                fname: this.userData.fname,
                lname: this.userData.lname,
                email: this.userData.email,
                purpose: this.userData.purpose
            })
            
        } else {
            this.setState({
                fname: '',
                lname: '',
                email: '',
                purpose: ''
            })
            
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    //Validation
    submitPost = e => {
        if (!this.state.fname || !this.state.lname || !this.state.email) {
            alert(" All fields are required")
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            });
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname = "/";
        }
    }
    render(){

      const {classes} = this.props;
             
        return (

            <>
                   <div>
                        < LandingNavBar/>
                    </div>
                    <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}><br></br>
                        <div>
                            <Grid item >
                                <LockOutlinedIcon/>
                            </Grid>
                            <Grid item>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            </Grid>
                             <br></br>
                        </div>
                        <form className={classes.form} onSubmit={this.onSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={this.state.fname}
                                    onChange={this.onChangefirstName}

                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    value={this.state.lname}
                                    onChange={this.onChangelastName}

                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    name="purpose"
                                    label="Purpose of visit"
                                    type="purpose"
                                    id="purpose"
                                    autoComplete="purpose"
                                    value={this.state.purpose}
                                    onChange={this.onChangePhone}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" /> }
                                    label="Your contact details will be shared with TØyen Unlimited"
                                    alignItems='row'
                                />
                                </Grid>
                            </Grid><br></br>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.submitPost}
                            >
                                Register
                            </Button>
                        </form>
                    </div>
                    </Container>
            </>
        );
     }
}
<Router>
    <Switch>
        <Route exact path="/About" component={About}/>
    </Switch>
</Router>

export default withStyles(useStyles, {withTheme:true}) (Map)
