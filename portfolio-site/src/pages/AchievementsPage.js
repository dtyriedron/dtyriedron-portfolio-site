import React from 'react';
import Hero from '../components/Hero';
import GridLayout from '../components/GridLayout';
import LoadContent from '../components/LoadContent';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Achievements from '../assests/data/Achievements.json';


function AchievementsPage(props){
    return(
        <div>
                <LoadContent urls={[
                Achievements,
            ]}>
            {
                ({ loading, error, data }) => {

                    if (loading) return (
                        <div>
                            <Hero title={props.title} />
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
                            <Hero title={props.title} />
                            <GridLayout page="achievement" cards={data}/>
                        </div>
                    );
                }   
            }   
            </LoadContent>
        </div>
    );
}
export default AchievementsPage;