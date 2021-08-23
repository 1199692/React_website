import React , { Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PDF from './PDF';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';
import emailjs from 'emailjs-com';
import {  toast } from 'react-toastify';
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
            phone: '',
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
        this.setState({phone: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
       const toSend =({
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            phone:this.state.phone
        })

    }

    //React Lifecycle

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                fname: this.userData.fname,
                lname: this.userData.lname,
                email: this.userData.email,
                phone: this.userData.phone
            })
            
        } else {
            this.setState({
                fname: '',
                lname: '',
                email: '',
                phone: ''
            })
            
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    //* Validation and send email *//
    submitPost = e => {
        if (!this.state.fname || !this.state.lname || !this.state.email) {
            alert(" All fields are required")
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            });
        }
        const templateParams = {
            from_name: this.state.fname + ' ' + this.state.lname,
            to_name: " ",
            phone: this.state.phone,
            to_email:this.state.email
          };
          
        emailjs.send("service_6gb5rm6", "template_a7w6adj", templateParams,"user_VSUN2LEZ6DDvQckI7ofal" )
          .then(
            function(response) {
              toast.success("Your message has successfully sent!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
              console.log("SUCCESS!", response.status, response.text);
            },
            function(err) {
              toast.error("Your message was not able to be sent");
            }
          );
    }
    render(){

      const {classes} = this.props;
             
        return (

            <>
                { 
                    <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}><br></br>
                    
                        <Typography component="h1" variant="h5">
                        Tell About Yourself
                        </Typography> <br></br>
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
                                required
                                fullWidth
                                name="phone"
                                label="Phone Number"
                                type="phone"
                                id="phone"
                                autoComplete="phone"
                                value={this.state.phone}
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
                            color="secondary"
                            className={classes.submit}
                            onClick={this.submitPost}
                            component={Link}
                            to={{ pathname: '/PDF',
                                  pathname: '/NavBar',
                                    state: {
                                        fname:this.state.fname,
                                        lname:this.state.lname,
                                        email:this.state.email,
                                        phone:this.state.phone
                                    } 
                                }}
                        >
                            Submit
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link href="#" variant="body2">
                                Next
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                    </Container> 
                }
            </>
        );
     }
}

export default withStyles(useStyles, {withTheme:true}) (Map)
