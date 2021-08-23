import { makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    wrapper: {
        width: "65%",
        margin: "auto" ,
        textAlign: "center",
      },
})
export default function NotFound() {
    const classes = styles();
    return (
        <div className={classes.wrapper}>
           <h1 > Page not Found 404</h1> 
        </div>
    )
}
