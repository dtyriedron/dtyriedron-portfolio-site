import React from 'react';
import Grid from '@material-ui/core/Grid';

function Footer(){
    return(    
        <footer className="mt-5">
            <Grid container >
                    <Grid item xs={9} > 
                        <div style={{marginLeft:"1rem"}}>
                            Dylan Tyrie-Dron
                        </div>
                    </Grid>
                    <Grid className="p-0 d-flex justify-content-end" item xs={3}>
                        <div style={{marginRight:"1rem"}}>
                        This site was made by Dylan Tyrie-Dron.
                        </div>
                    </Grid>
                </Grid>
        </footer>
    );
}

export default Footer;