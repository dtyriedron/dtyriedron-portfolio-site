import React, { useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hero from '../components/Hero';
import GridLayout from '../components/GridLayout';
import LoadContent from '../components/LoadContent';

import Android from '../assests/images/android.svg';

function PortfolioMainPage(props){
    return(
        <div>
          <LoadContent urls={[
                "https://api.github.com/users/dtyriedron/repos",
            ]}>
            {
            ({ loading, error, data }) => {
                console.log(data);

                if (loading) return (
                    <div>
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
                            <Grid container>
                                <Grid item container className="justify-content-center">
                                    <CircularProgress className="justify-content-center" animation="border"/>
                                </Grid>
                            </Grid>
                    </div>
                );
                if (error) return <span>Error loading</span>

                return(
                    <div>
                        <Hero title={props.title}/>
                        <GridLayout page="project" cards={data}/>
                    </div>
                );
            }
            }
            </LoadContent>
            
        </div>
    );
    
}

export default PortfolioMainPage;