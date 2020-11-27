import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";


function Hero(props){
    return(
        <Grid container>
            <Grid item container className="justify-content-center">
                { props.title && <Typography variant="h1" color="primary">{props.title}</Typography> }
            </Grid>
            <Grid item container className="justify-content-center">
                { props.subTitle && <Typography color="secondary" variant="h4">{props.subTitle}</Typography> }
            </Grid>
            <Grid item container className="justify-content-center">
                { props.text && <Typography color="secondary" variant="h5">{props.text}</Typography> }
            </Grid>
        </Grid>
    );
}

export default Hero;