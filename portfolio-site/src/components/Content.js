import React from 'react';
import Grid from '@material-ui/core/Grid';

function Content(props){
    return(
        <Grid container>
            <Grid item xs={12} style={{marginLeft:"15%"}}>
                {props.children} 
            </Grid>
        </Grid>
    );
}

export default Content;