import React, { useState, useLayoutEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from "@material-ui/core/styles";

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import LoadContent from '../components/LoadContent.js';

// import Config from '../config.js';

function HomePage(props){
    const theme = useTheme();
    return(
        <div>
            <LoadContent urls={[
                "https://www.instagram.com/doseofdylz/?__a=1",
            ]}>
            {
            ({ loading, error, data }) => {

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
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>                      
                        <Carousel insta={data} />
                    </div>
                );
            }
            }
            </LoadContent>
        </div>
    );
        
}
export default HomePage;