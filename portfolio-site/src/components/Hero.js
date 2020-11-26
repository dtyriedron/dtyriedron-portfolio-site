import React from 'react';
import Grid from '@material-ui/core/Grid';


function Hero(props){
    return(
        <Grid container>
            <Grid item container className="justify-content-center">
                { props.title && <h3 className="display-4 font-weight-bolder">{props.title}</h3> }
            </Grid>
            <Grid item container className="justify-content-center">
                { props.subTitle && <h4 className="display-6 font-weight-light">{props.subTitle}</h4> }
            </Grid>
            <Grid item container className="justify-content-center">
                { props.text && <h5 className="lead font-weight-light">{props.text}</h5> }
            </Grid>
        </Grid>
    );
}

export default Hero;